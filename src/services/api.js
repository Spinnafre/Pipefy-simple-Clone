export function loadLists() {
    return [
        {
            title: 'Pendências',
            creatable: true,
            cards: [
                {
                    id: 1,
                    content: '',
                    labels: ['#7159c1', '#54e1f7', 'red', 'blue'],
                    user: 'https://api.adorable.io/avatars/285/abott@adorable.png'
                },
                {
                    id: 2,
                    content: 'Estudar Banco de dados não relacional',
                    labels: ['#7159c1'],
                    user: 'https://api.adorable.io/avatars/285/abott@adorable.png'
                },
                {
                    id: 3,
                    content: 'Estudar React Native',
                    labels: ['#7159c1'],
                    user: 'https://api.adorable.io/avatars/285/abott@adorable.png'
                },
                {
                    id: 4,
                    content: 'Praticar ReactJs"',
                    labels: ['#54e1f7'],
                    user: 'https://api.adorable.io/avatars/285/abott@adorable.png'
                },
                {
                    id: 5,
                    content: 'Express e NodeJs',
                    labels: ['#54e1f7'],
                    user: 'https://api.adorable.io/avatars/285/abott@adorable.png'
                },
            ]
        },
        {
            title: 'Executando',
            creatable: false,
            cards: [
                {
                    id: 6,
                    content: 'Recriando clone do Pipefy',
                    labels: [],
                    user: 'https://api.adorable.io/avatars/285/abott@adorable.png'
                }
            ]
        },
        {
            title: 'Pausado',
            creatable: false,
            cards: [
                {
                    id: 7,
                    content: 'MySql',
                    labels: ['#7159c1'],
                    user: 'https://api.adorable.io/avatars/285/abott@adorable.png'
                },
                {
                    id: 8,
                    content: 'Testar Drag on Drop',
                    labels: ['#54e1f7'],
                    user: 'https://api.adorable.io/avatars/285/abott@adorable.png'
                },

            ]
        },
        {
            title: 'Concluído',
            creatable: false,
            done: true,
            cards: [
                {
                    id: 10,
                    content: 'Express',
                    labels: [],
                },
                {
                    id: 12,
                    content: 'NodeJs',
                    labels: ['#54e1f7'],
                },
                {
                    id: 13,
                    content: 'React JS',
                    labels: ['#7159c1'],
                },
                {
                    id: 14,
                    content: 'Styled- Component',
                    labels: ['#7159c1'],
                }
            ]
        },
    ];
}