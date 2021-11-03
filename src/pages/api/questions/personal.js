export default function handler(request, response){
  const personal = [
    {
      question: "What's my favorite movie?",
      options: [
        'My favorite movie is Diary Of A Wimpy Kid',
        'My favorite movie is The Blue Lagoon',
        'My favorite movie is Grown Ups',
      ],
      resposta: 'My favorite movie is Diary Of A Wimpy Kid',
      id: 'p1',
    },
    {
      question: 'What do I do in my spare time?',
      options: [
        'I knit in my spare time',
        'I play games in my spare time',
        'I watch series in my spare time',
      ],
      resposta: 'I play games in my spare time',
      id: 'p2',
    },
    {
      question: 'Chuck Norris, Jackie-Chan, or Jean-Claude Van Damme, who is my favorite actor?',
      options: [
          'My favorite actor is Chuck Norris',
          'My favorite actor is Jean-Claude Van Damme',
          'My favorite actor is Jackie-Chan'],
      resposta: 'My favorite actor is Jackie-Chan',
      id: 'p3',
    },
    {
      question: 'What is my favorite subject?',
      options: [
          'My favorite subject is math',
          'My favorite subject is physics', 
          'My favorite subject is geography'],
      resposta: 'My favorite subject is physics',
      id: 'p4',
    },
  ];


  return response.json(personal);
}


