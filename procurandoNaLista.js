const alunos = ['João', 'Juliana', 'Ana', 'Caio'];
const medias = [10, 8, 7.5, 9];

const matriz = [alunos, medias];

exibeNomeENota("Juliana");

function exibeNomeENota(aluno) {
    if (matriz[0].includes(aluno)) {

        const [alunos , medias] = matriz;

        const indice = alunos.indexOf(aluno);
        const mediaDoAluno = medias[indice];
        console.log(`A media do(a)  ${aluno} é ${mediaDoAluno}`);
    } else {
        console.log(`Aluno não encontrado`);
    }
}