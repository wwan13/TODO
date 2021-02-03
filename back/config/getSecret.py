import json

def getSecret():
    
    with open("secret.json","r") as jsonFile:
        jsonData = json.load(jsonFile)

    secretKey = jsonData["secret-key"]

    return secretKey