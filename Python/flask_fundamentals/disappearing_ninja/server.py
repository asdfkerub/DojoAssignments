from flask import Flask, render_template,redirect
app = Flask(__name__)
@app.route('/')
def index():
    return render_template('index.html')

@app.route('/ninjas')
def ninja():
    ninja = '/static/images/tmnt.png'
    return render_template('ninjas.html', ninja=ninja)

@app.route('/ninjas/<color>')
def ninjas(color):
    if color == "blue":
        ninja = '/static/images/leonardo.jpg'
    elif color == "orange":
        ninja = '/static/images/michelangelo.jpg'
    elif color == "red":
        ninja = '/static/images/raphael.jpg'
    elif color == "purple":
        ninja = '/static/images/donatello.jpg'
    else:
        ninja = '/static/images/notapril.jpg'
    return render_template('ninjas.html',ninja=ninja)
app.run(debug=True)
