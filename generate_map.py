from PIL import Image, ImageDraw

def draw_map():
    # 1600x1200 image for 4:3 ratio
    W, H = 1600, 1200
    img = Image.new('RGB', (W, H), color='#050a0e')
    draw = ImageDraw.Draw(img)

    # Draw grid
    for x in range(0, W, 40):
        draw.line([(x, 0), (x, H)], fill=(0, 255, 136, 40), width=1)
    for y in range(0, H, 40):
        draw.line([(0, y), (W, y)], fill=(0, 255, 136, 40), width=1)

    zones = [
        {'id': 'z1', 'name': 'TAMAN DEPAN', 'x': 2, 'y': 2, 'w': 23, 'h': 31, 'type': 'garden'},
        {'id': 'z2', 'name': 'GARASI', 'x': 26, 'y': 2, 'w': 23, 'h': 31, 'type': 'garage'},
        {'id': 'z3', 'name': 'RUANG TAMU', 'x': 50, 'y': 2, 'w': 23, 'h': 31, 'type': 'living'},
        {'id': 'z4', 'name': 'KAMAR TAMU', 'x': 74, 'y': 2, 'w': 24, 'h': 31, 'type': 'bed'},
        {'id': 'z5', 'name': 'DAPUR', 'x': 2, 'y': 35, 'w': 23, 'h': 31, 'type': 'kitchen'},
        {'id': 'z6', 'name': 'RUANG MAKAN', 'x': 26, 'y': 35, 'w': 23, 'h': 31, 'type': 'dining'},
        {'id': 'z7', 'name': 'R. KELUARGA', 'x': 50, 'y': 35, 'w': 23, 'h': 31, 'type': 'family'},
        {'id': 'z8', 'name': 'KAMAR MANDI', 'x': 74, 'y': 35, 'w': 24, 'h': 31, 'type': 'bath'},
        {'id': 'z9', 'name': 'GUDANG', 'x': 2, 'y': 68, 'w': 23, 'h': 30, 'type': 'storage'},
        {'id': 'z10', 'name': 'R. SERVER', 'x': 26, 'y': 68, 'w': 23, 'h': 30, 'type': 'server'},
        {'id': 'z11', 'name': 'KAMAR UTAMA', 'x': 50, 'y': 68, 'w': 23, 'h': 30, 'type': 'bed'},
        {'id': 'z12', 'name': 'TAMAN BLKNG', 'x': 74, 'y': 68, 'w': 24, 'h': 30, 'type': 'garden'}
    ]

    def pct_to_px(px, py, pw, ph):
        return (int((px/100)*W), int((py/100)*H), int((pw/100)*W), int((ph/100)*H))

    color = (0, 255, 136)
    
    for z in zones:
        zx, zy, zw, zh = pct_to_px(z['x'], z['y'], z['w'], z['h'])
        # Outline room walls (thick)
        draw.rectangle([zx, zy, zx+zw, zy+zh], outline=color, width=4)
        
        # Inner drawing
        inner_pad = 20
        ix, iy, iw, ih = zx+inner_pad, zy+inner_pad, zw-(inner_pad*2), zh-(inner_pad*2)
        
        if iw <= 0 or ih <= 0: continue
        
        if z['type'] == 'garden':
            draw.ellipse([ix, iy, ix+80, iy+80], outline=color, width=2)
            draw.ellipse([ix+100, iy+50, ix+180, iy+130], outline=color, width=2)
            draw.ellipse([ix+40, iy+150, ix+120, iy+230], outline=color, width=2)
            
        elif z['type'] == 'garage':
            draw.rectangle([ix+60, iy+30, ix+180, iy+260], outline=color, width=2)
            draw.line([(ix+60, iy+90), (ix+180, iy+90)], fill=color, width=2)
            draw.line([(ix+60, iy+210), (ix+180, iy+210)], fill=color, width=2)
            
        elif z['type'] == 'living':
            draw.rectangle([ix+20, iy+20, ix+180, iy+80], outline=color, width=2) # Sofa
            draw.rectangle([ix+50, iy+120, ix+150, iy+180], outline=color, width=2) # Table
            
        elif z['type'] == 'bed':
            draw.rectangle([ix+60, iy+20, ix+220, iy+220], outline=color, width=2) # Bed
            draw.rectangle([ix+20, iy+20, ix+50, iy+60], outline=color, width=2) # Nightstand
            draw.rectangle([ix+230, iy+20, ix+260, iy+60], outline=color, width=2) # Nightstand
            
        elif z['type'] == 'kitchen':
            draw.rectangle([ix, iy, ix+zw-80, iy+50], outline=color, width=2) 
            draw.rectangle([ix, iy, ix+50, iy+zh-80], outline=color, width=2) 
            draw.ellipse([ix+80, iy+80, ix+150, iy+150], outline=color, width=2)
            
        elif z['type'] == 'dining':
            draw.rectangle([ix+60, iy+80, ix+iw-60, iy+ih-80], outline=color, width=2)
            for cy in range(iy+100, iy+ih-100, 50):
                draw.rectangle([ix+20, cy, ix+50, cy+30], outline=color, width=2)
                draw.rectangle([ix+iw-50, cy, ix+iw-20, cy+30], outline=color, width=2)
                
        elif z['type'] == 'family':
            draw.rectangle([ix+30, iy+20, ix+iw-30, iy+50], outline=color, width=2)
            draw.rectangle([ix+60, iy+180, ix+iw-60, iy+250], outline=color, width=2)
            
        elif z['type'] == 'bath':
            draw.rectangle([ix+20, iy+20, ix+100, iy+160], outline=color, width=2)
            draw.ellipse([ix+140, iy+20, ix+190, iy+80], outline=color, width=2)
            draw.rectangle([ix+20, iy+ih-70, ix+120, iy+ih-20], outline=color, width=2)
            
        elif z['type'] == 'storage':
            draw.rectangle([ix+20, iy+20, ix+80, iy+80], outline=color, width=2)
            draw.rectangle([ix+100, iy+20, ix+180, iy+100], outline=color, width=2)
            draw.rectangle([ix+30, iy+130, ix+110, iy+210], outline=color, width=2)
            draw.rectangle([ix+160, iy+170, ix+220, iy+230], outline=color, width=2)
            
        elif z['type'] == 'server':
            for r in range(0, 4):
                draw.rectangle([ix+30 + r*60, iy+30, ix+70 + r*60, iy+ih-30], outline=color, width=2)

    img.save('map.png')
    print("map.png generated successfully.")

if __name__ == '__main__':
    draw_map()
