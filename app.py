from flask import Flask, abort, request, render_template, jsonify

from calcs import Calculator

app = Flask(__name__)


@app.route('/')
def hello_world():
    return render_template('index.html')


@app.route('/step-one', methods=['POST'])
def step_one():
    if not request.json:
        abort(400)
    try:
        data = request.json
        input = data['input']
        # @dev: als er meer variablen zijn kun je die hier een voor een toevoegen,
        # de except vangt op deze manier missende variabelen op.
    except KeyError:
        abort(403)
    else:
        return jsonify(answer=Calculator().step_one(input))


@app.route('/step-two', methods=['POST'])
def step_two():
    if not request.json:
        abort(400)
    try:
        data = request.json
        input = data['input']
    except KeyError:
        abort(403)
    else:
        return jsonify(answer=Calculator().step_two(input))


@app.route('/step-three', methods=['POST'])
def step_three():
    if not request.json:
        abort(400)
    try:
        data = request.json
        input = data['input']
    except KeyError:
        abort(403)
    else:
        return jsonify(answer=Calculator().step_three(input))


if __name__ == '__main__':
    # @dev: dit moet je wel aanpassen in productie
    app.run(host='0.0.0.0', port=5000, debug=True)
