from flask import Flask, render_template
app = Flask(__name__)
app.secret_key = 'virtual assistant'

@app.route('/')
def showAssistant():
    return render_template('index.html')

if __name__ == '__main__':
    app.debug = True
    app.run(host='0.0.0.0', port=8000)