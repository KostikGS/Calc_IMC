// src/components/IMCCalculator.js
import { useState } from 'react';

const IMCCalc = () => {
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [imc, setIMC] = useState(null);

    const calculateIMC = () => {
        if (!height || !weight) {
            alert('Por favor, insira altura e peso.');
            return;
        }

        const heightInMeters = height / 100;
        const calculatedIMC = (weight / (heightInMeters * heightInMeters)).toFixed(2);
        setIMC(calculatedIMC);
    };

    return (
        <div>
            <h1>Calculadora de IMC</h1>
            <div>
                <label>Altura (cm):</label>
                <input
                    type="number"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                />
            </div>
            <div>
                <label>Peso (kg):</label>
                <input
                    type="number"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                />
            </div>
            <button onClick={calculateIMC}>Calcular IMC</button>
            {imc && (
                <div>
                    <p>Seu IMC é: {imc}</p>
                    <p>Classificação: {getIMCClassification(imc)}</p>
                </div>
            )}
        </div>
    );
};

const getIMCClassification = (imc) => {
    if (imc < 18.5) {
        return 'Abaixo do peso';
    } else if (imc < 24.9) {
        return 'Peso normal';
    } else if (imc < 29.9) {
        return 'Sobrepeso';
    } else if (imc < 34.9) {
        return 'Obesidade Grau I';
    } else if (imc < 39.9) {
        return 'Obesidade Grau II';
    } else {
        return 'Obesidade Grau III';
    }
};

export default IMCCalc;
