import styles from './Generator.module.css'
import {useState} from "react";

const Generator = () => {
    const quotes = [
        'quote1',
        'quote2',
        'quote3',
        'quote4',
        'quote5',
        'quote6',
        'quote7',
        'quote8',
        'quote9',
        'quote10',
    ]

    const [currentQuote, setCurrentQuote] = useState(quotes[0])

    const getRandomQuote = () => {
        const random = Math.floor(Math.random() * quotes.length)
        setCurrentQuote(quotes[random])
    }

    return (
        <div className={styles.generatorWrapper}>
            <button
                className={styles.newQuoteButton}
                onClick={getRandomQuote}
            >
                New quote
            </button>
            <div className={styles.readyQuote}>
                "{currentQuote}"
            </div>

        </div>
    )
}

export default Generator