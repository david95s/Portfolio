export default function handler(request, response){
  const academic = [
    {
      question: 'Which programming language did I study first?',
      options: [
        'I started studying Python',
        'I started studying C++',
        'I started studying JavaScript',
      ],
      resposta: 'I started studying Python',
      id: 'p1',
    },
    {
      question: 'Which of these areas do you think I prefer?',
      options: [
        "I'm passionate about Mobile Developer",
        "I'm passionate about Frontend Developer",
        "I'm passionate about Backend Developer",
      ],
      resposta: "I'm passionate about Frontend Developer",
      id: 'p2',
    },
    {
      question: 'Which of these programming language am I studying? ',
      options: [`I'm currently learning Golang`, `I'm currently learning NextJS`, `I'm currently learning Ruby`],
      resposta: `I'm currently learning NextJS`,
      id: 'p3',
    },
    {
      question: 'Which of these technologies do I master?',
      options: [`I master Javascript, Jquery, ReactJS, Redux, HTML, Css, Bootstrap`, 'I master Ruby Rails, Elixir, Django', 'I master PHP, Laravel, VueJS'],
      resposta: 'I master Javascript, Jquery, ReactJS, Redux, HTML, Css, Bootstrap',
      id: 'p4',
    },
  ];

  return response.json(academic);
}

