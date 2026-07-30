#!/usr/bin/env python3
"""
detect-screen.py — find the blank WHITE device screen in a scene photo and print
the `screen.quad` (four corners TL,TR,BR,BL) in slide coordinates, ready to paste
into a scene-*.json DEVICE-COMPOSITE slide.

Method: threshold near-white pixels, keep the LARGEST connected component (ignores
stray highlights/window light), take that component's bounding box (its straight
edges reach the true screen edges; rounded corners inset negligibly), then map the
photo → slide space assuming object-fit:cover into the slide canvas (default 1080x1350).

Usage:
    python3 system/detect-screen.py <image.png> [slideW slideH] [threshold]
Example:
    python3 system/detect-screen.py profiles/kymbo/assets/scene-01/s2.png
"""
import sys, struct, zlib, collections

def load(p):
    d = open(p, 'rb').read(); i = 8; W = H = ct = 0; idat = b''
    while i < len(d):
        ln = struct.unpack('>I', d[i:i+4])[0]; t = d[i+4:i+8]; dd = d[i+8:i+8+ln]
        if t == b'IHDR': W, H, ct = struct.unpack('>I', dd[0:4])[0], struct.unpack('>I', dd[4:8])[0], dd[9]
        if t == b'IDAT': idat += dd
        i += 12 + ln
    bpp = {2: 3, 6: 4, 0: 1}[ct]; raw = zlib.decompress(idat); st = W * bpp
    def pae(a, b, c):
        p = a + b - c; pa = abs(p-a); pb = abs(p-b); pc = abs(p-c)
        return a if pa <= pb and pa <= pc else (b if pb <= pc else c)
    prev = bytearray(st); rows = []; pos = 0
    for y in range(H):
        f = raw[pos]; pos += 1; ln = bytearray(raw[pos:pos+st]); pos += st
        for x in range(st):
            a = ln[x-bpp] if x >= bpp else 0; b = prev[x]; c = prev[x-bpp] if x >= bpp else 0
            if f == 1: ln[x] = (ln[x]+a) & 255
            elif f == 2: ln[x] = (ln[x]+b) & 255
            elif f == 3: ln[x] = (ln[x]+((a+b) >> 1)) & 255
            elif f == 4: ln[x] = (ln[x]+pae(a, b, c)) & 255
        prev = ln; rows.append((bytes(ln), bpp))
    return W, H, rows

def detect(path, slideW=1080, slideH=1350, thr=248, step=2):
    W, H, rows = load(path)
    pts = set()
    for y in range(0, H, step):
        line, bpp = rows[y]
        for x in range(0, W, step):
            o = x * bpp
            if line[o] >= thr and line[o+1] >= thr and line[o+2] >= thr:
                pts.add((x // step, y // step))
    # largest 4-connected component (ignores stray white like window light)
    seen = set(); best = []
    for s in pts:
        if s in seen: continue
        comp = []; dq = collections.deque([s]); seen.add(s)
        while dq:
            cx, cy = dq.popleft(); comp.append((cx, cy))
            for dx, dy in ((1, 0), (-1, 0), (0, 1), (0, -1)):
                n = (cx+dx, cy+dy)
                if n in pts and n not in seen: seen.add(n); dq.append(n)
        if len(comp) > len(best): best = comp
    xs = [c[0]*step for c in best]; ys = [c[1]*step for c in best]
    minx, maxx, miny, maxy = min(xs), max(xs), min(ys), max(ys)
    # object-fit:cover of WxH photo into slideW x slideH
    sc = max(slideW / W, slideH / H); sw, sh = W * sc, H * sc
    ox, oy = (slideW - sw) / 2, (slideH - sh) / 2
    def to(x, y): return [round(x*sc+ox), round(y*sc+oy)]
    quad = [to(minx, miny), to(maxx, miny), to(maxx, maxy), to(minx, maxy)]
    return quad, (W, H), (minx, miny, maxx, maxy)

if __name__ == '__main__':
    path = sys.argv[1]
    sw = int(sys.argv[2]) if len(sys.argv) > 2 else 1080
    sh = int(sys.argv[3]) if len(sys.argv) > 3 else 1350
    thr = int(sys.argv[4]) if len(sys.argv) > 4 else 248
    quad, dim, bbox = detect(path, sw, sh, thr)
    import json
    print('image', dim, 'white-bbox', bbox)
    print('"quad":', json.dumps(quad))
