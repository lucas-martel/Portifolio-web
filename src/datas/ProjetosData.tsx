import { ObjetivoInfo } from "./Objetivos";
import { Box, Link, Typography } from "@mui/material";

export const projetosData: ObjetivoInfo[] = [
  {
    summary: "Frontend de um site",
    details: (
      <Box>
        <Box>
          <Typography>
            Interface do site LinkadosBR. Ele funciona em conjunto com a API
            backend criada para ele.<br></br>Foi desenvolvido usando Next.js e
            TypeScript, com Axios para consumo da API.
          </Typography>
          <Typography>
            <Link href="https://www.linkadosbr.shop/" target="_blank">
              Link do site
            </Link>
          </Typography>
          <Typography>
            <Link
              href="https://github.com/lucas-martel/front_linkadosbr"
              target="_blank"
            >
              Link do projeto no GitHub
            </Link>
          </Typography>
        </Box>
      </Box>
    ),
  },
  {
    summary: "Praticando HTML, CSS e JavaScript",
    details: (
      <Box>
        <Typography>
          Este pequeno projeto de jogo web foi desenvolvido em 2022, utilizando
          apenas HTML, CSS e JavaScript.<br></br> O objetivo era colocar em
          prática meus conhecimentos em programação web, trabalhando com
          estrutura de dados e lógica de programação.<br></br> Toda a
          arquitetura da engine foi feita do zero, sem uso de bibliotecas
          externas.
        </Typography>
        <Typography>
          <Link
            target="_blank"
            href="https://lucas-martel.github.io/ufoGame/ufo.html"
          >
            Link da página
          </Link>
        </Typography>
        <Typography>
          <Link target="_blank" href="https://github.com/lucas-martel/ufoGame">
            Link do projeto no GitHub
          </Link>
        </Typography>
      </Box>
    ),
  },
  {
    summary: "Desafio Frontend Mentor - Dropdown",
    details: (
      <Box>
        <Typography>
          Este projeto foi um desafio proposto pelo site Frontend Mentor, voltado
          para estudantes de programação frontend.<br></br>O objetivo era criar
          uma página com um menu dropdown.<br></br>Para este projeto, utilizei
          React.js, criando o dropdown com componentes e hooks do próprio React.
        </Typography>
        <Typography>
          <Link
            href="https://lucas-martel.github.io/front-end-mentor-intro-section-with-dropdown-navigation-main/"
            target="_blank"
          >
            Link da página criada
          </Link>
        </Typography>
        <Typography>
          <Link
            target="_blank"
            href="https://github.com/lucas-martel/front-end-mentor-intro-section-with-dropdown-navigation-main"
          >
            Link do projeto no GitHub
          </Link>
        </Typography>
      </Box>
    ),
  },
  {
    summary: "Desafio Frontend Mentor - Card",
    details: (
      <Box>
        <Typography>
          Neste desafio do site Frontend Mentor, o objetivo era criar um card de
          venda de um produto. Apesar de ser um projeto simples, o desafio era
          desenvolver uma página responsiva.
        </Typography>
        <Typography>
          <Link
            href="https://lucas-martel.github.io/front-end-mentor-product-preview-card-component-main/"
            target="_blank"
          >
            Link da página criada
          </Link>
        </Typography>
        <Typography>
          <Link
            target="_blank"
            href="https://github.com/lucas-martel/front-end-mentor-product-preview-card-component-main"
          >
            Link do projeto no GitHub
          </Link>
        </Typography>
      </Box>
    ),
  },
];

export const projetosEmDesenvolvimento: ObjetivoInfo[] = [
  {
    summary: "Jogo feito no Unity",
    details: (
      <Box>
        <Typography>
          Este jogo está sendo desenvolvido utilizando a engine Unity, com a
          linguagem C#.<br></br>O código foi otimizado para reduzir travamentos,
          instanciando classes na memória no início do jogo.<br></br>Além disso,
          é utilizada a técnica de object pooling para reutilizar objetos
          frequentemente utilizados durante o jogo.<br></br>
          Exemplo:<br></br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          Um projétil pode ser reutilizado em vez de ser constantemente
          instanciado e destruído, reduzindo o consumo de memória e melhorando
          a performance do jogo.
        </Typography>
        <img
          src="/jogozombiedev.png"
          alt="Página de desenvolvimento do jogo usando a Unity"
        />
      </Box>
    ),
  },
];
