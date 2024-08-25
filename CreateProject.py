import os, datetime, pathlib

name = input('Enter your project name...\n>>>')

desktop = pathlib.Path.home() / 'Desktop'

date = os.path.join(desktop, datetime.date.today().strftime('%d-%b-%y'))

name = os.path.join(date, name)
os.makedirs(date)
os.makedirs(name)
html = name+'\\index.html'
css = name+'\\style.css'
js = name+'\\script.js'
with open(html, 'w') as f:
  f.write(f"""<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Document</title>
      <link rel="stylesheet" href="style.css" />
    </head>
    <body>
        <div class="main">
        
        </div>
      <script src="script.js"></script>
    </body>
  </html>
  """)
with open(css, 'x') as s:
  s.write("""* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

.main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: cornsilk;
}
""")
a = open(js, 'x')
os.system('code '+'"'+name+'"')
