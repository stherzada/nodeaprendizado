function obterUsuario(){
    return new Promise(function resolvePromise(resolve, reject){
        setTimeout(function(){
        return resolve({
            id: 1 ,
            nome: 'Sther',
            dataNascimento:new Date()
        
        })
    }, 1000)

    })
    
}

function obterTelefone(idUsuario, callback){
    setTimeout(() => {
        return callback(null,{
            telefone:'22222222',
            ddd: 11
        })
    }, 2000)
}
function obterEndereco(idUsuario, callback){
    setTimeout(() =>{
        return callback(null, {
            rua: 'Rua pipipi',
            bairro: 'pipipi',
            numero: 02
        })
    }, 2000)
}


function resolverUsuario(erro, usuario){
    console.log('usuario', usuario)
}

function resolverTelefone(erro, telefone){
    console.log('telefone', telefone)
}

function resolverEndereco(erro, endereco){
    console.log('endereco', endereco)
}


const usuarioPromise = obterUsuario()
usuarioPromise
    .then(function (resultado){
        console.log()
    }, function(error){

})
.catch(function (error){
    console.error('Deu ruim mané', error)
})
// obterUsuario(function resolverUsuario(error, usuario){

//     if(error){
//         console.error('Deu ruim no Usuario', error)
//         return;
//     }
//     obterTelefone(usuario.id, function resolverTelefone(error1, telefone){
//         if(error1){
//             console.error('Po mano teu telefone deu ruim', error1)
//             return;
//         }
//         obterEndereco(usuario.id, function resolverEndereco(error2, endereco){
//             if(error2){
//                 console.error('Que endereço é esse fi?', error2)
//                 return;
//             }

//         console.log(`
//             Nome: ${usuario.nome}
//             Endereco:${endereco.rua}, ${endereco.bairro}, ${endereco.numero}
//             Telefone: (${telefone.ddd}), ${telefone.telefone}
//         `)
//         })
//     })
    
// })
// const telefone = obterUsuario(usuario.id)


// console.log('telefone' , telefone)