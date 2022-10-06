import { useState } from "react";
import { FaDiscord, FaGithub } from 'react-icons/fa';
import './App.css';
import commnads from "./commands";

export default function App() {
    const [show, setShow] = useState('')


    const commands = {
        "help": [
            'there are several commands that can be used.',
            ' ',
            'help          display this help message',
            'version       display this version information',
            'social       display social information like email addresses, github and so on'
        ],
        "version": [
            '~Portfolio 1.0.0~',
        ],
        "social": [
            'You can follow me on the following sites:',
            `Github `,
            `Dicord`
        ]
    }

    //setShow(commands.help.map(command => <ul><li>{command}</li></ul>))

    const handleKey = e => {
        if (e.key === 'Enter') {
            let cmd = document.getElementById('cmd')
            switch (cmd.value) {
                case 'help':
                    setShow(commands.help.map(command => <ul><li>{command}</li></ul>))
                    break;
                case 'version':
                    setShow(commands.version)
                    break;
                case 'social':
                    setShow(commands.social.map(social => <ul><li>{social}</li></ul>))
            }
            e.preventDefault();
        }
    }

    return (
        <div className="App">
            <div className="wrapper">
                <p className="welcome">Welcome to TAO's Portfolio feel free to explore in this terminal</p>
                <textarea name="textarea" id="cmd" cols="30" rows="1" onKeyDown={handleKey} autofocus></textarea>
                <div className="display">{show}</div>
            </div>
        </div>
    )
}