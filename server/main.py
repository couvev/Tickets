from flask import Flask, jsonify, request

# Criação da aplicação Flask
app = Flask(__name__)

# Configurações (opcional)
app.config['DEBUG'] = True  # Ativa o modo de depuração para desenvolvimento

# Rota inicial (home)
@app.route('/')
def home():
    return "Bem-vindo ao servidor Flask!"

# Rota de exemplo para API (GET)
@app.route('/api/v1/resource', methods=['GET'])
def get_resource():
    # Exemplo de retorno JSON
    data = {
        "id": 1,
        "name": "Recurso Exemplo",
        "description": "Essa é uma API REST básica usando Flask."
    }
    return jsonify(data)

# Rota de exemplo para API (POST)
@app.route('/api/v1/resource', methods=['POST'])
def create_resource():
    # Pega os dados enviados no corpo da requisição
    data = request.json
    # Retorna os dados enviados como exemplo
    return jsonify({
        "message": "Recurso criado com sucesso!",
        "data": data
    }), 201

# Tratamento de erros
@app.errorhandler(404)
def not_found(error):
    return jsonify({"error": "Página não encontrada!"}), 404

# Inicialização do servidor
if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
