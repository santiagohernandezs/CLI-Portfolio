import { useState } from "react";
import './App.css';

export default function App() {
    const [show, setShow] = useState('')

    //'there are several commands that can be used.',
    //' ',
    //commands and content
    const commands = {
        "about": `I'm a self-taught FrontEnd developer from Venezuela 🇻🇪. I have interest and some experience with React.js, version control wiht Git, a so on. Also, I'm a computer science student from the Alexander of Humboldt University and I'm excited to learn more about coding in frontend and backend development.`,
        "help": {
            "about -a": "  display about message to know about me",
            "help -h": "   display this help message",
            "version -v": "display this version information",
            "social -s": " display social information like email addresses, github and so on"
        },
        "version": [
            '~Portfolio 1.0.0~',
        ],
        "social": {
            "github": "https://github.com/santiagohernandezs",
            "discord": "https://discordapp.com/users/979726706069880913/",
            "instagram": "https://www.instagram.com/taox.rar/",
        }
    }

    //this function allows to catch the enter key press
    const handleKey = e => {
        if (e.key === 'Enter') {
            let cmd = document.getElementById('cmd')
            switch (cmd.value) {
                case 'about':
                case '-a':
                    setShow(commands.about)
                    break
                case 'help':
                case '-h':
                    setShow(
                        Object.entries(commands.help).map(pair => {
                            const name = pair[0]
                            const des = pair[1]
                            return (
                                <div>
                                    <ul><li>{name + '    ' + des}</li></ul>
                                </div>
                            )
                        }))
                    break;
                case 'version':
                case '-v':
                    setShow(commands.version)
                    break;
                case 'social':
                case '-s':
                    setShow(Object.entries(commands.social).map(pair => {
                        const name = pair[0]
                        const url = pair[1]
                        return <ul><li>{name + '  =>  '}<a href={url}>{url}</a></li></ul>
                    }))
                    break;
            }
            e.preventDefault();
        }
    }

    return (
        <div className="App">
            <div className="wrapper">
                <p className="welcome">
                    Welcome to Tao's Portfolio feel free to explore in this terminal <br /> Copyright (C) Tao's Property. All rigths reserved.
                </p>
                <div className="command-line">
                    <span>C:/User/Tao ~</span>
                    <textarea name="textarea" id="cmd" cols="30" rows="1" onKeyDown={handleKey} autofocus></textarea>
                </div>
                <div className="display"><text>{show}</text></div>
            </div>
        </div>
    )
}