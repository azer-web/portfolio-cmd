/* eslint-disable import/no-anonymous-default-export */
export default {
    commands: {
        echo: {
            description: 'Prints the given text to the console',
            usage: 'echo <text>',
            fn: (...args) => args.join(" ")
        },
       
        about: {
            description: 'About Me.',
            usage: 'about',
            fn: () => {
                return "About Me.\nI have graduated at Baku State University,\nComputer Science.I work as a front-end programmer for 3years.\nAt the same time I am busy back-end program languages.\nI know react,vue,node js and etc..."
            }
        },
        linkedin: {
            description: 'Opens my Linkedin account.',
            usage: 'Linkedin',
            fn: () => {
                window.open('https://www.linkedin.com/in/azar-damirli-83b478105/', '_blank')
                return "opening linkedin account..."
            }
        },
        github: {
            description: 'Opens my GitHub Profile.',
            usage: 'Github',
            fn: () => {
                window.open('https://github.com/azer-web', '_blank')
                return "opening github account..."
            }
        },
               languages: {
            description: 'Languages I know.',
            usage: 'languages',
            fn: () => {
                return `
                    these are the languages I know.\n---\n
                    english          - 70%
                    turkish          - 100%
                    React            - 80%
                    Vue js           - 60%
                    Node js          - 60%
                    javascript       - 60%
                    html5            - 90%
                    css3             - 80%
                    flutter          - 10% - [learning]\n---\n
                `
            }
        },
        skills: {
            description: 'Skills I have.',
            usage: 'skills',
            fn: () => {
                return `
                    these are the skills I have.\n---\n
                    procrastination  - 100%
                    coding           - 50%
                    studying         - 10%
                    overthinking     - 100%
                    social-skills    - 00%
                    making-playlists - 100%\n---\n
                `
            }
        },
        projects: {
            description: 'Projects I have worked on.',
            usage: 'projects',
            fn: () => {
                return `
                    Cool projects I have worked on.\n---\n
                    'Kapital bank Voice recording'                      | 'Voice Recording app' | 'React js'
                    'Kapital bank Auto Profile'                         | 'Auto Profile app'     | 'React js'
                    'Kapital bank Online Queue'                         | 'Online Queue'        | 'React js'
                    'IXQS'                                                               |  'Project for Din'     | 'React js'
                    'SHII'                                                             |'Project for Din'      | 'React js'
                    'DIM REPORTS'                                                    | 'Project for Dim'                             | 'React js'
                    'Dnis'                                              | 'Project for Din'     | 'React js'
                    'Face Recognation'                                  | 'Project for Din'     | 'React js'
                    \n---\n
                `
            }
        },
        editor: {
            description: 'Details about my current editor',
            usage: 'editor',
            fn: () => {
                return `
                    Editor: Visual Studio Code\n
                    Theme : Dracula\n
                    Font  : MonoLisa
                `
            }
        },
        repo: {
            description: "Open my github repository.",
            usage: 'repo',
            fn: () => {
                window.open("https://github.com/azer-web", '_blank')
                return "opening repository..."
            }
        }
    },
    overwrites:{
        help: {
            description: 'List all available commands',
            usage: 'help',
        },
        cd: {
            description: 'Change directory, not really, lol!',
            usage: 'cd <directory>',
        },
        ls: {
            description: 'List files in the current directory',
            usage: 'ls',
        },
        mkdir: {
            description: 'Make a directory',
            usage: 'mkdir <directory>',
        },
        clear: {
            description: 'Clears the terminal',
            usage: 'clear'
        },
        myImage: {
            description: 'Get my image.',
            usage: 'My image',
        }
    }
}