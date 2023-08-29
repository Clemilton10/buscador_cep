import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import api from './services/api';

function App() {
	const [input, setInput] = useState('');
	const [endereco, setEndereco] = useState({});
	const handleSearch = async () => {
		try {
			if (input === '') {
				alert('Preencha o CEP!');
				return;
			}
			const response = await api.get(`${input}/json`);
			setEndereco(response.data);
		} catch (error) {
			console.log(error.message);
		}
	};
	return (
		<div className="container">
			<h1 className="title">Buscador de CEP</h1>
			<div className="conatinerInput">
				<input
					type="text"
					placeholder="Digite o CEP"
					value={input}
					onChange={(e) => setInput(e.target.value)}
				/>
				<button className="buttonSearch" onClick={handleSearch}>
					<FiSearch size={25} color="#fff" />
				</button>
			</div>
			<main className="main">
				<h2>{endereco.cep}</h2>
				<span>{endereco.logradouro}</span>
				<span>{endereco.complemento}</span>
				<span>{endereco.bairro}</span>
				<span>
					{endereco.localidade} {endereco.uf}
				</span>
			</main>
		</div>
	);
}

export default App;
