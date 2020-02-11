from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow
import os  # core python module

# initializing app
app = Flask(__name__)
basedir = os.path.abspath(os.path.dirname(__file__))

# DB
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///' + \
    os.path.join(basedir, 'db.sqlite')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# DB Initialization
db = SQLAlchemy(app)

# Marshmello Initilization
ma = Marshmallow(app)



class Character(db.Model): # Model =============================================================================
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), unique=True)
    character_class = db.Column(db.String(25))
    race = db.Column(db.String(25))
    strength = db.Column(db.Integer)
    dexterity = db.Column(db.Integer)
    constitution = db.Column(db.Integer)
    intelligence = db.Column(db.Integer)
    wisdom = db.Column(db.Integer)
    charisma = db.Column(db.Integer)

    def __init__(self, name, character_class, race, strength, dexterity, constitution, intelligence, wisdom, charisma):
        self.name = name
        self.character_class = character_class
        self.race = race
        self.strength = strength
        self.dexterity = dexterity
        self.constitution = constitution
        self.intelligence = intelligence
        self.wisdom = wisdom
        self.charisma = charisma


class CharacterSchema(ma.Schema): # Schema =====================================================================
    class Meta:
        fields = ('id', 'name', 'character_class', 'race', 'strength',
                  'dexterity', 'constitution', 'intelligence', 'wisdom', 'charisma')


# initialize schema
character_schema = CharacterSchema()
characters_schema = CharacterSchema(many=True)


@app.route("/", methods=['GET']) 
def all():
    return jsonify({'status': "OK"})

@app.route('/create_character', methods=['POST']) #Creating New Character ======================================
def create_character():
    name = request.json['name']
    character_class = request.json['character_class']
    race = request.json['race']
    strength = request.json['strength']
    dexterity = request.json['dexterity']
    constitution = request.json['constitution']
    intelligence = request.json['intelligence']
    wisdom = request.json['wisdom']
    charisma = request.json['charisma']

    new_character = Character(name, character_class,race,strength,dexterity,constitution,intelligence,wisdom,charisma)

    db.session.add(new_character)
    db.session.commit()

    return character_schema.jsonify(new_character)

@app.route('/all_characters', methods=['GET']) #Get All Characters =============================================
def get_characters():
    all_characters = Character.query.all()
    result = characters_schema.dump(all_characters)
    return jsonify(result)

@app.route('/delete_character/<int:id>', methods=['DELETE']) #Deleting Character ===============================
def delete_character(id):
    character = Character.query.get(id)
    db.session.delete(charater)
    db.session.commit()
    return character_schema.jsonify(character)

@app.route('/update_character/<int:id>', methods=['PUT'])
def update_character(id):
    character = Character.get(id)
    character.name = request.json['name']
    character.character_class = request.json['character_class']
    character.race = request.json['race']
    character.strength = request.json['strength']
    character.dexterity = request.json['dexterity']
    character.constitution = request.json['constitution']
    character.intelligence = request.json['intelligence']
    character.wisdom = request.json['wisdom']
    character.charisma = request.json['charisma']

    db.session.commit()
    return character_schema.jsonify(character)


# run server
if __name__ == '__main__':
    app.run(debug=True)
