import './App.css';

import { useState, useEffect } from 'react';
export default function App() {
    const [rubToKzt, setRubToKzt] = useState(0.12466);
    const [eurToKzt, setEurToKzt] = useState(0.00209);
    const [kztSum, setKztSum] = useState('');

    useEffect(() => {
        const currencyFetch = fetch(
            'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/kzt.json'
        )
            .then((response) => response.json())
            .then(
                (response) =>
                    setRubToKzt(response.kzt.rub) &
                    setEurToKzt(response.kzt.eur)
            );
    }, []);

    const handleRubToKzt = (e) => {
        setRubToKzt(e.target.value);
    };
    const handleKztToEur = (e) => {
        setEurToKzt(e.target.value);
    };

    const handleKztSum = (e) => {
        setKztSum(e.target.value);
    };
    let dollarUSLocale = Intl.NumberFormat('en-US');
    return (
        <div className="App">
            <form>
                <div class="grid gap-6 mb-6 md:grid-cols-2">
                    <div>
                        <label
                            for="first_name"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                            1 RUB = {rubToKzt}KZT
                        </label>
                        <input
                            type="text"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder={rubToKzt}
                            value={rubToKzt}
                            onChange={handleRubToKzt}
                        />
                    </div>
                    <div>
                        <label
                            for="last_name"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                            1 EUR = {eurToKzt}KZT
                        </label>
                        <input
                            type="text"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder={eurToKzt}
                            value={eurToKzt}
                            onChange={handleKztToEur}
                        />
                    </div>
                </div>
                <div class="mb-6">
                    <label
                        for="email"
                        class="block mb-2 text-2xl font-medium text-gray-900 dark:text-gray-300"
                    >
                        {dollarUSLocale.format(kztSum)} KZT
                    </label>
                    <label
                        for="email"
                        class="block mb-2 text-3xl font-medium text-gray-900 dark:text-gray-300"
                    >
                        {dollarUSLocale.format(kztSum * rubToKzt)} рублей
                    </label>
                    <label
                        for="email"
                        class="block mb-2 text-3xl font-medium text-gray-900 dark:text-gray-300"
                    >
                        {dollarUSLocale.format(kztSum * eurToKzt)} евро
                    </label>
                    <input
                        type="tel"
                        step="100"
                        value={kztSum}
                        onChange={handleKztSum}
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-2xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="input sum in KZT"
                    />
                </div>
            </form>
        </div>
    );
}
