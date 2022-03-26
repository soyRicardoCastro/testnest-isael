usdtABI = data1;
inquisitorABI = dataINQ;
bannersABI = dataFLAG;
bastionABI = dataBastion;
dungeonABI = dataDungeon;
  function startApp() {
    let provider = window.ethereum;
    if (typeof provider !== 'undefined') {
      // Metamask is not installed
      
      provider
      .request({ method: 'eth_requestAccounts'})
      .then((accounts) => {selectedAccount = accounts[0]; console.log(`Selected account is ${selectedAccount}`);})
      .catch((err) => { console.log(err);
      return;
    });

      window.ethereum.on('accountsChanged', function (accounts) {
        selectedAccount = accounts[0];
        console.log(`Selected account changed to ${selectedAccount}`);
    });
}
};

const web3 = new Web3(window.ethereum);  
usdtContract = new web3.eth.Contract(usdtABI, '0x07de306FF27a2B630B1141956844eB1552B956B5');
inquisitorContract = new web3.eth.Contract(inquisitorABI, '0xA583babe56DEc0e73427613529E6Fe7656Edd27C');
bannerContract = new web3.eth.Contract(bannersABI, '0x327b300eeEb6e435936e5dc8553f8C3E141c5bBb');
bastionContract = new web3.eth.Contract(bastionABI, '0xA0d70A51AC80B12fFb60a1E6DA47A68d4CEaA29e');
dungeonContract = new web3.eth.Contract(dungeonABI, '0xAD20d141bE8B2594407b566052B54587Cc427328');
startApp();

function createNFT(amountOfMints, nftType) {
if (nftType == 0) {
return inquisitorContract.methods.createInquisitor(amountOfMints).send({ from: selectedAccount, value: "323625000000000"});
} else {
return bannerContract.methods.createBanner(amountOfMints).send({ from: selectedAccount, value: "323625000000000"});
}
}

document.getElementById("mint").addEventListener('click', () => {
var selectedInput = getInputValue('boxMints');
var selectedMintInput = getInputValue('mintType');
result = window.confirm(`Metamask will be prompted to mint ${selectedInput} NFTs and ${selectedInput * 15} USDT will be charged from your account, please confirm this operation`);
if (result) {
createNFT(selectedInput, selectedMintInput).then(tx => {
    console.log(tx)}).catch(err => {console.log(err);})
}  
});

function burnBastion(bastionId){
return bastionContract.methods.burnBastion(bastionId).send({ from: selectedAccount});
}

document.getElementById("burnBastion").addEventListener('click', () => {
var selectedInput0 = document.getElementById("tokenIdofBastionToBurn").value;
burnBastion(parseInt(selectedInput0)).then(tx => {
    console.log(tx)}).catch(err => {console.log(err);})
  });

function nftData(tokenId, nftType) {
if (nftType == 0) {
return inquisitorContract.methods.retrieveTokenStats(tokenId).call();
} if (nftType == 1){
return bannerContract.methods.retrieveTokenStats(tokenId).call();
} else {
return bastionContract.methods.retrieveBastionData(tokenId).call();
}
}

document.getElementById("bastionData").addEventListener('click', () => {
  tokensIdOfWallet(selectedAccount, 2)
  .then(tx => {
    let myInquisitorsHTML = document.getElementById("myNFTSBastion");
    myInquisitorsHTML.innerHTML = '';
    console.log(tx);
    for (let i = 0; i < tx.length; i ++) {
      nftData(tx[i], 2).then(txi => {
        myInquisitorsHTML.innerHTML = myInquisitorsHTML.innerHTML + "tokenId" + ": " + `${tx[i]} ` + "totalHealth" + ": " + txi["0"] + " totalAttack" + ": " + txi["1"] + " EXP" + ": " + txi["2"]+ " InquisitorSlots" + ": " + txi["3"] + " filledInquisitorSlots" + ": " + txi["4"] + " filledBannerSlots" + ": " + txi["5"] +"<br/>";
        console.log(txi);
      }).catch( err => {
        console.log(err);
      })

    }
  })
  .catch(err => {
  console.log(err);
});    
});

document.getElementById("nftData").addEventListener('click', () => {
var selectedMintInput = getInputValue('mintType');
  tokensIdOfWallet(selectedAccount, selectedMintInput)
  .then( tx => {
    let myInquisitorsHTML = document.getElementById("myNFTS");
    myInquisitorsHTML.innerHTML = '';
    console.log(tx);
    if (selectedMintInput == 0) {
      let voidArray = [];
      for (let i = 0; i < tx.length; i++) {
        nftData(tx[i], 0).then( tx => {
          voidArray[i] = tx;
          console.log(tx);
      }).catch( err => {
        console.log(err);
      })
      }
      setTimeout(() => {
        for (let i = 0; i < tx.length; i ++) {
          myInquisitorsHTML.innerHTML = myInquisitorsHTML.innerHTML + "tokenId" + ": " + `${tx[i]} ` + "Health" + ": " + voidArray[i]["0"] + " Attack" + ": " +  voidArray[i]["1"] + " Rank" + ": " +  voidArray[i]["2"] + "<br/>";
      }
        console.log(voidArray[0], tx[0]);
      }, 8000)
      
      
    } else {
        let voidArray = [];
      for (let i = 0; i < tx.length; i++) {
        nftData(tx[i], 1).then( tx => {
          voidArray[i] = tx;
          console.log(tx);
      }).catch( err => {
        console.log(err);
      })
      }
      
      setTimeout(() => {
        for (let i = 0; i < tx.length; i ++) {
          myInquisitorsHTML.innerHTML = myInquisitorsHTML.innerHTML + "tokenId" + ": " + `${tx[i]} ` + "Slots" + ": " + voidArray[i]["0"] + " Rank" + ": " + voidArray[i]["1"] + "<br/>";
      }
        console.log(voidArray[0], tx[0]);
      }, 8000)

    }
    

  })
  .catch(err => {
  console.log(err);
});    
});  

function approveForAll(nftType) {
if (nftType == 0) {
return inquisitorContract.methods.setApprovalForAll("0xA0d70A51AC80B12fFb60a1E6DA47A68d4CEaA29e", true).send({ from: selectedAccount});
} else {
return bannerContract.methods.setApprovalForAll("0xA0d70A51AC80B12fFb60a1E6DA47A68d4CEaA29e", true).send( { from: selectedAccount});
}
}

document.getElementById("approveAll").addEventListener('click', () => {
approveForAll(0).then(tx => {
  console.log(tx);
  approveForAll(1).then(tx => {
    console.log(tx)}).catch(err => {console.log(err);})
  }).catch(err => {
  console.log(err);})
});

async function approveUSDT(nftType) {
let totalBalance = await totalUSDT();
if (nftType == 0) {
return usdtContract.methods.approve("0xA583babe56DEc0e73427613529E6Fe7656Edd27C", totalBalance.toString()).send({from: selectedAccount});
} else {
return usdtContract.methods.approve("0x327b300eeEb6e435936e5dc8553f8C3E141c5bBb", totalBalance.toString()).send({from: selectedAccount});
} 
}

document.getElementById("NoApprove").addEventListener('click', () => {
alert("This function will approve all your USDT to both contracts (Inquisitor and Banners)");
approveUSDT(0).then(tx => {
 console.log(tx);
 approveUSDT(1).then(tx => {
   console.log(tx);
 }).catch(tx => {
   console.log(tx);
 })
}).catch(tx => {
 console.log(tx);
})
});

function getInputValue(elementId){
var inputVal = document.getElementById(elementId);
return inputVal.options[inputVal.selectedIndex].value;
}

function getSimpleInputValue(elementId){
return document.getElementById(elementId).value;
}

function getInputValue1(htmlID){
      // Selecting the input element and get its value 
      var inputVal = document.getElementById(htmlID).value;
      var arrayOfIds = inputVal.split(' ');
      var array1 = [];
      console.log(arrayOfIds.length);
      for (let i = 0; arrayOfIds.length > i; i++) {
        array1.push(parseInt(arrayOfIds[i]));
      }
      return array1;
  }

function tokensIdOfWallet(address, nftType) {
if (nftType == 0) {
return inquisitorContract.methods.getTokenIds(address).call();
} if (nftType == 1){
return bannerContract.methods.getTokenIds(address).call();
} else {
return bastionContract.methods.getTokenIds(address).call();
}
}

export function mintBastion(tokenIdsOfBanner, tokenIdsOfInquisitors) {
return bastionContract.methods.mintBastion(tokenIdsOfBanner, tokenIdsOfInquisitors).send({ from: selectedAccount});
}

document.getElementById("mintBastion").addEventListener('click', () => {
var selectedInput0 = getInputValue1("tokenIdsOfBanner")
var selectedInput1 = getInputValue1("tokenIdsOfInquisitors")
alert("Before minting bastion please be sure to approve all your nfts");
mintBastion(selectedInput0, selectedInput1).then(tx => {
    console.log(tx)}).catch(err => {console.log(err);})
  });

export function attackZone(Zone, mob, tokenId) {
return dungeonContract.methods.AttackZone(Zone, mob, tokenId).send({from: selectedAccount});
}

document.getElementById("attackZone").addEventListener('click', () => {
console.log("ESTOY HACIENDO CLICK")
var selectedInput0 = getInputValue('Zone');
var selectedInput1 = getInputValue('mob');
var tokenIdofBastion = document.getElementById("bastionId").value;
console.log(selectedInput0, selectedInput1, tokenIdofBastion);
attackZone(selectedInput0, selectedInput1, tokenIdofBastion).then(tx => {
    console.log(tx)}).catch(err => {console.log(err);})
  });

export function bastionActualHealth(tokenId){
return dungeonContract.methods.bastionActualHealth(tokenId).call();
}

document.getElementById("checkBastionHealth").addEventListener('click', () => {
var tokenIdofBastion = document.getElementById("checkBastionHealthID").value;
bastionActualHealth(tokenIdofBastion).then(tx => {
 alert(tx);
    console.log(tx)}).catch(err => {console.log(err);})
  });

function healNFTBastion(tokenid) {
return dungeonContract.methods.healBastion(tokenid).send({ from: selectedAccount});
}

document.getElementById("healBastion").addEventListener('click', () => {
var selectedInput = getSimpleInputValue("healBastionId");
healNFTBastion(selectedInput).then( tx => {
console.log(tx);
}).catch( tx => {
console.log(tx);
})
})

function addBanners(arrayOfBanners, tokenId) {
return bastionContract.methods.addBanners(arrayOfBanners, tokenId).send({from: selectedAccount});
}

document.getElementById("addBannersBTN").addEventListener('click', () => {
var selectedInput = getInputValue1('addBanners');
var selectedInput1 = getSimpleInputValue('tokenIdBastionFLAG');
addBanners(selectedInput, selectedInput1).then( tx => {
console.log(tx);
}).catch( tx => {
console.log(tx);
})
})

export function addInquisitors(arrayOfInquisitors, tokenId) {
return bastionContract.methods.addInquisitors(arrayOfInquisitors, tokenId).send({from: selectedAccount});
}

document.getElementById("addInquisitorsBTN").addEventListener('click', () => {
var selectedInput = getInputValue1('addInquisitors');
var selectedInput1 = getSimpleInputValue('tokenIdBastionINQ');
addInquisitors(selectedInput, selectedInput1).then( tx => {
console.log(tx);
}).catch( tx => {
console.log(tx);
})
})

function totalUSDT() {
return usdtContract.methods.balanceOf(selectedAccount).call({ from: selectedAccount});
}



//////////////////////////////////////////////////////////////////////////////////////////////////////////////////store



const cards = document.getElementById('cards')
const items = document.getElementById('items')
const footer = document.getElementById('footer')
const templateCard = document.getElementById('template-card').content
const templateFooter = document.getElementById('template-footer').content
const templateCarrito = document.getElementById('template-carrito').content
const fragment = document.createDocumentFragment()
let carrito = {}

document.addEventListener('DOMContentLoaded', e => { fetchData() });
cards.addEventListener('click', e => { addCarrito(e) });
items.addEventListener('click', e => { btnAumentarDisminuir(e) })

const fetchData = async () => {
    const res = await fetch('Api.json');
    const data = await res.json()
    pintarCards(data)
}
const pintarCards = data => {
    data.forEach(item => {
        templateCard.querySelector('h5').textContent = item.title
        templateCard.querySelector('p').textContent = item.precio
        templateCard.querySelector('button').dataset.id = item.id
        const clone = templateCard.cloneNode(true)
        fragment.appendChild(clone)
    })
    cards.appendChild(fragment)
}
const addCarrito = e => {
    if (e.target.classList.contains('btnbtn-primary')) {
        setCarrito(e.target.parentElement)
    }
    e.stopPropagation()
}

const setCarrito = item => {
    const producto = {
        title: item.querySelector('h5').textContent,
        precio: item.querySelector('p').textContent,
        id: item.querySelector('button').dataset.id,
        cantidad: 1
    }
    if (carrito.hasOwnProperty(producto.id)) {
        producto.cantidad = carrito[producto.id].cantidad + 1
    }

    carrito[producto.id] = { ...producto }
    
    pintarCarrito()
}

const pintarCarrito = () => {
    items.innerHTML = ''

    Object.values(carrito).forEach(producto => {
        templateCarrito.querySelector('th').textContent = producto.id
        templateCarrito.querySelectorAll('td')[0].textContent = producto.title
        templateCarrito.querySelectorAll('td')[1].textContent = producto.cantidad
        templateCarrito.querySelector('span').textContent = producto.precio * producto.cantidad
        
        templateCarrito.querySelector('.btn-info').dataset.id = producto.id
        templateCarrito.querySelector('.btn-danger').dataset.id = producto.id

        const clone = templateCarrito.cloneNode(true)
        fragment.appendChild(clone)
    })
    items.appendChild(fragment)

    pintarFooter()
}

const pintarFooter = () => {
    footer.innerHTML = ''
    
    if (Object.keys(carrito).length === 0) {
        footer.innerHTML = `
        <th scope="row" colspan="5">Carrito vacío </th>
        `
        return
    }
    
    const nCantidad = Object.values(carrito).reduce((acc, { cantidad }) => acc + cantidad, 0)
    const nPrecio = Object.values(carrito).reduce((acc, {cantidad, precio}) => acc + cantidad * precio ,0)

    templateFooter.querySelectorAll('td')[0].textContent = nCantidad
    templateFooter.querySelector('span').textContent = nPrecio

    const clone = templateFooter.cloneNode(true)
    fragment.appendChild(clone)

    footer.appendChild(fragment)

    const boton = document.querySelector('#vaciar-carrito')
    boton.addEventListener('click', () => {
        carrito = {}
        pintarCarrito()
    })

}

const btnAumentarDisminuir = e => {
    if (e.target.classList.contains('btn-info')) {
        const producto = carrito[e.target.dataset.id]
        producto.cantidad++
        carrito[e.target.dataset.id] = { ...producto }
        pintarCarrito()
    }

    if (e.target.classList.contains('btn-danger')) {
        const producto = carrito[e.target.dataset.id]
        producto.cantidad--
        if (producto.cantidad === 0) {
            delete carrito[e.target.dataset.id]
        } else {
            carrito[e.target.dataset.id] = {...producto}
        }
        pintarCarrito()
    }
    e.stopPropagation()
}