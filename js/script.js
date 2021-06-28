var en = "0";
var pt = "1";

function trans(){
        if (pt=="1" && en=="0"){
            //TRANSLATE FOR ENGLISH
            en="1";
            pt="0";
            //MENU
            document.getElementById("tmtrans").textContent="PT";
            document.getElementById("altocontraste").textContent="Contrast";
            //POSTS
            //Start
            document.getElementById("tpstitle").textContent="WELCOME!";
            document.getElementById("tpsdate").textContent="march 12, 2020";
            document.getElementById("tpscontent").textContent="This blog was produced with the objective of improving the independence of students of Internet Systems, containing Semantic Web as W3C standards aiming to make students as close as possible to the job market. Because, its creation is totally based on the skills of the students with a little help from the teachers, to really exercise creativity.";
            //Post1
            document.getElementById("tp1date").textContent="march 12, 2020";
            document.getElementById("tp1p1").textContent="The Faculty of Technology Prof. José Camargo de Jales's main mission is to train competent professionals, with the ability to easily enter their students into the job market, always remaining in constant evolution, with proactivity, innovation and in a very ethical manner.";
            document.getElementById("tp1p2").innerHTML="Founded on September 10, 2007 based on Decree No. 52.122, of September 3, 2007, published in DOE of September 4, 2007, <a href='http://www.fatecjales.edu.br/' target='_blank'>FATEC</a> Jales is one of 66 founded in the state and administered by Centro Paula Souza . Initially, in 2010, there was only the Internet Systems course with 70 places per semester, half in the morning and the other at night. Later, in 2014, the Business Management course was added, with 40 semester vacancies in the evening and in 2015 it was possible to do it remotely with 40 semester vacancies.";
            document.getElementById("tp1p3").innerHTML="The Faculty of Technology “Professor José Camargo” - <a href='http://www.fatecjales.edu.br/' target='_blank'>FATEC</a> Jales remains among the best colleges in the country, according to data from the General Course Index (IGC) released this week by the Ministry of Education (MEC). The IGC evaluates, through a scale of 1 to 5, the country's higher education institutions, as well as their courses, based on a series of elements, among which the assessment of the National Student Performance Exam (Enade) and the profile of teachers.";
            document.getElementById("tp1p4").innerHTML="Of the more than 2000 institutions evaluated, only 20.5% were registered in the upper ranges (grades 4 and 5), among them, for the second consecutive year, <a href='http://www.fatecjales.edu.br/' target='_blank'>FATEC</a> Jales, which ends another academic year with great joy, since the index it is the main national indicator of the quality of higher education.";
            //Post2
            document.getElementById("tp2title").textContent="GAMIFICATION IN DE EDUCATION";
            document.getElementById("tp2date").textContent="may 25, 2020";
            document.getElementById("tp2p1").textContent="Something that has been following people for a long time is games, which promote people's interaction, knowledge of the new and the art of dealing with challenges. Using this medium in education is something that has been worked on for some time, it facilitates learning even outside the classroom through analog or electronic games, this method is called Gamification.";
            document.getElementById("tp2p2").innerHTML="Basically Gamification is the use of game logic in other contexts. Bringing these elements to education, gamification in the pedagogical process means using the strategies specific to games to make the learning process more attractive, making use of natural human behaviors such as competitiveness, socialization, search for reward and pleasure in overcoming. Specifically, in the case of Brazilian education, the growing adherence to gamification coincides with the introduction of the new National Common Base Curriculum, the NCBC as described in <a href='https://revistaeducacao.com.br/2019/07/01/gamificacao-na-sala-de-aula/' target='_blank'>Revista Educação</a>.";
            document.getElementById("tp2p3").innerHTML="It does not only mean rewarding the student for each task performed, but using design and game techniques to enrich the teaching-learning process, promoting an attractive and challenging environment that stimulates students in their search for knowledge as quoted on <a href='https://www.somospar.com.br/como-usar-a-gamificacao-no-processo-pedagogico/' target='_blank'>SOMOSPAR's</a> own website.";
            document.getElementById("tp2p4").textContent="Currently practically everyone is in a state of alert and quarantine due to the pandemic of COVID-19 (Coronga for the intimate), at that time more than ever comes the need to keep social and educational interaction at a distance, so gamification is welcome.";
            document.getElementById("tp2p5").innerHTML="Its implementation is dynamic and must be adapted and adapted according to the teachers and the discipline itself, according to the <a href='https://sae.digital/gamificacao-na-educacao/' target='_blank'>SAE Digital</a> website some points worth mentioning are: definition of the public, the problem, the context and the objective, to develop some rules, establish reward, have fun and learn at lot.";
            //ABOUT
            document.getElementById("tabtitle").textContent="My name is Bruno Inocêncio";   
            document.getElementById("tabcontent").innerHTML="Since the brat always loves an area of ​​IT, when you get my first phone it seems surreal and everything that was possible to do with it, always asks me what it was like to do everything !? Shortly thereafter, I got my first games on the same phone, flash games that, however simple they may be, even at the time I wanted to be able to develop them. After finishing high school, not yet, for lack of information or knowledge about how the IT area had expanded yet, I wanted to take a computer course, unfortunately I didn't find anything like that opting for a technical administration course at Etec in Fernandópolis , thanks to the course i just got better informed. So, when I graduated I was finally able to enter the technology area still at Etec, where I met excellent professionals, expanded even more obviously, my knowledge of technologies, loving the area of ​​security and validations, afterwards and currently I am a student of Internet systems at <a href='http://www.fatecjales.edu.br/' target='_blank'>FATEC</a> Jales, lover of games, anime and programming besides, I love spending my free time studying geek news, writing, reading stories and listening to a lot of music, intending to work in the area and maybe participating in the development of a game in the future, <a title='E-Mail' href='mailto:bruno.inocencio@fatec.sp.gov.br?subject=Hello,%20I%20come%20from%20your%20Fatec%20blog...' target='_blank'>Click Here to contact me</a> by email.";
            //COURSES
            document.getElementById("tctitle").textContent="FATEC Courses";
            document.getElementById("tcsub1").textContent="ASD";
            document.getElementById("tccontent1").textContent="Analysis and Systems Development";
            document.getElementById("tcsub2").textContent="Agri";
            document.getElementById("tccontent2").textContent="Agribusiness";
            document.getElementById("tcsub3").textContent="BM";
            document.getElementById("tccontent3").textContent="Business Management";
            document.getElementById("tccontent4").textContent="Systems for Internet";
            //FOOTER
            document.getElementById("tf").textContent="Copyright© 2020 | Almost all rights reserved for ";

        }else if (pt=="0" && en=="1"){
            //TRADUZ PARA O PORTUGUES
            en="0";
            pt="1";
            //MENU
            document.getElementById("tmtrans").textContent="EN";
            document.getElementById("altocontraste").textContent="Contraste";
            //POSTS
            //Inicial
            document.getElementById("tpstitle").textContent="BEM VINDO(A)!";
            document.getElementById("tpsdate").textContent="12 de março, 2020";
            document.getElementById("tpscontent").textContent="Este blog foi produzido com objetivo de melhorar a indepêndencia dos alunos de Sistemas para Internet, contendo Web Semântica como padrões da W3C visando deixar os alunos o mais próximo possivel do mercado de trabalho. Pois, sua criação é totalmente com base nas habilidades dos alunos com leve auxilio dos professores, para realmente exercitar a criatividade.";
            //Post1
            document.getElementById("tp1date").textContent="12 de março, 2020";
            document.getElementById("tp1p1").textContent="A Faculdade de Teconologia Prof. José Camargo de Jales tem por sua missão principal formar profissionais competentes, com capacidade de engressar facilmente seus estudantes no mercado de trabalho permanecendo sempre em constante evolução, com proatividade, inovação e de maneira sempre muito ética.";
            document.getElementById("tp1p2").innerHTML="Fundada no dia 10 de setembro de 2007 baseando se no Decreto nº 52.122, de 3 de setembro de 2007, publicado no DOE de 4 de setembro de 2007, a <a href='http://www.fatecjales.edu.br/' target='_blank'>FATEC</a> Jales é mais umas entre 66 fundadas no estado e administrada pelo Centro Paula Souza. Inicialmente, em 2010, havia apenas o curso de Sistemas para Internet com 70 vagas por semestre, sendo metade de manha e a outra a noite. Mais tarde, em 2014, foi adicionado o curso Gestão Empresarial, com 40 vagas semestrais no período noturno e logo em 2015 foi possível realiza-lo a distância com 40 vagas semestrais.";
            document.getElementById("tp1p3").innerHTML="A Faculdade de Tecnologia “Professor José Camargo”- <a href='http://www.fatecjales.edu.br/' target='_blank'>FATEC</a> Jales continua entre as melhores faculdades do país, de acordo com os dados do Índice Geral dos Cursos (IGC) divulgados esta semana pelo Ministério da Educação (MEC). O IGC avalia, por meio de uma escala de 1 a 5, as instituições de ensino superior do país, assim como seus cursos, com base em uma série de elementos, entre os quais a avaliação do Exame Nacional de Desempenho dos Estudantes (Enade) e do perfil dos professores.";
            document.getElementById("tp1p4").innerHTML="Das mais de 2000 instituições avaliadas, somente 20,5% foram registradas nas faixas superiores (notas 4 e 5), entre elas, pelo segundo ano consecutivo, a <a href='http://www.fatecjales.edu.br/' target='_blank'>FATEC</a> Jales, que finaliza mais um ano letivo com muita alegria, já que o índice é o principal indicador nacional da qualidade do ensino superior.";
            //Post2
            document.getElementById("tp2title").textContent="GAMIFICAÇÃO NA EDUCAÇÃO EAD";
            document.getElementById("tp2date").textContent="25 de maio, 2020";
            document.getElementById("tp2p1").textContent="Algo que vem acompanhando as pessoas desde muito tempo, são os jogos, que promovem a interação das pessoas, conhecimento do novo e a arte de lidar com desafios. Utilizar esse meio na educação é algo que já vem sendo trabalhado a algum tempo, facilita o aprendizado até fora das salas de aula por meio de jogos analógicos ou eletrônicos esse método é chamado de Gamificação.";
            document.getElementById("tp2p2").innerHTML="Basicamente Gamificação é o uso da lógica dos games em outros contextos. Trazendo esses elementos para a educação, a gamificação no processo pedagógico significa usar as estratégias próprias dos jogos para tornar o processo de aprendizado mais atrativo, valendo-se de comportamentos naturais do ser humano como competitividade, socialização, busca por recompensa e prazer pela superação. Especificamente, no caso da educação brasileira, a crescente adesão à gamificação coincide com a introdução da nova Base Nacional Comum Curricular, a BNCC como descrito na <a href='https://revistaeducacao.com.br/2019/07/01/gamificacao-na-sala-de-aula/' target='_blank'>Revista Educação</a>.";
            document.getElementById("tp2p3").innerHTML="Não significa apenas recompensar o aluno a cada tarefa realizada, mas sim utilizar o design e as técnicas próprias de jogos para enriquecer o processo de ensino-aprendizagem, promovendo um ambiente atraente e desafiador que estimule os alunos em sua busca pelo conhecimento como citado no próprio site da <a href='https://www.somospar.com.br/como-usar-a-gamificacao-no-processo-pedagogico/' target='_blank'>SOMOSPAR</a>.";
            document.getElementById("tp2p4").textContent="Atualmente praticamente todo o mundo está em estado de alerta e de quarentena devido a pandemia do COVID-19 (Coronga para os íntimos), nessa hora mais do que nunca vem a necessidade de manter a interação social e educacional a distancia, logo a gamificação é muito bem-vinda.";
            document.getElementById("tp2p5").innerHTML="Sua implementação é dinâmica e deve se adequar e adaptar de acordo com os professores e a própria disciplina, de acordo com o site <a href='https://sae.digital/gamificacao-na-educacao/' target='_blank'>SAE Digital</a> alguns pontos que valem ser citados são: definição do público, do problema, do contexto e o objetivo, desenvolver algumas regras, estabelecer recompensa, divirtam-se e aprendam bastante.";
            //SOBRE
            document.getElementById("tabtitle").textContent = "Meu nome é Bruno Inocêncio.";
            document.getElementById("tabcontent").innerHTML="Desde de pirralho sempre adorei a área da TI, quando vi e obtive meu primeiro telefone achava surreal tudo o que era possivel fazer com ele, sempre me perguntava como que era fazer tudo aquilo!? Pouco tempo depois consegui meus primeiros jogos no mesmo telefone, jogos em flash que por mais simples que sejam até mesmo para época eu queria muito ser capaz de desenvolvê-los. Após concluir o ensino médio ainda não tinha, por falta de informação o conhecimento sobre como a área de TI havia se expandido ainda sim, queria fazer um curso de informática, infelizmente não encontrei nada do gênero optando pelo curso de Técnico de Administração na Etec de Fernandópolis, graças ao curso acabei me informando melhor. Assim, quando me formei consegui engressar finalmente na área da tecnologia ainda na Etec, onde conheci excelentes profissionais ampliei ainda mais obviamente meu conhecimento sobre tecnologias adorando muito a área de segurança e validações, após e atualmente sou estudante de Sistemas para Internet na <a href='http://www.fatecjales.edu.br/' target='_blank'>FATEC</a> Jales, amante de games, animes e programação além de, adorar passar meu tempo livre estudando novidades geeks, escrevendo, lendo histórias e ouvindo muita música, pretendo trabalhar na área e quem sabe futuramente participar do desenvolvimento de um game, se deseja entrar em contato via e-mail <a title='E-Mail' href='mailto:bruno.inocencio@fatec.sp.gov.br?subject=Olá,%20venho%20do%20seu%20blog%20da%20Fatec...' target='_blank'>Clique Aqui</a>.";
            //CURSOS
            document.getElementById("tctitle").textContent="Cursos FATEC";
            document.getElementById("tcsub1").textContent="ADS";
            document.getElementById("tccontent1").textContent="Análise e Desenvolvimento de Sistemas";
            document.getElementById("tcsub2").textContent="Agro";
            document.getElementById("tccontent2").textContent="Agronegócio";
            document.getElementById("tcsub3").textContent="GE";
            document.getElementById("tccontent3").textContent="Gestão Empresarial";
            document.getElementById("tccontent4").textContent="Sistemas para Internet";
            //FOOTER
            document.getElementById("tf").textContent="Copyright© 2020 | Quase todos direitos reservados por ";
        }
    }