from flask import Flask, render_template , request , redirect , session,flash

app = Flask(__name__)
app.secret_key = 'kerub'

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/result' , methods=['POST'])
def result():

    if len(request.form['name']) < 1:
        flash('Please add your name')
        return redirect('/')
    elif request.form['location'] == 'default':
        flash('Choose a location')
        return redirect('/')
    elif request.form['language'] == 'default':
        flash('Choose a language')
        return redirect('/')
    elif len(request.form['desc']) > 120:
        flash('Your description is too long')
        return redirect('/')
    else:
        session['name'] = request.form['name']
        session['location'] = request.form['location']
        session['language'] = request.form['language']
        session['desc'] = request.form['desc']

    # if len(request.form['name']) < 1:
    #     flash('Please add your name')
    # else:
    #     session["name"] = request.form['name']
    # if request.form['location'] == 'default':
    #     flash('Please choose a location')
    # else:
    #     session["location"] = request.form['location']
    # if request.form['language'] == 'default':
    #     flash('Please choose a language')
    # else:
    #     session["language"] = request.form['language']
    # if len(request.form['desc']) > 120:
    #     flash('Your description is too long')
    # else:
    #     session["desc"] = request.form['desc']
    return render_template('result.html')
app.run(debug=True)
