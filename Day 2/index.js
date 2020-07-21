const pads ={
	"81": {
		"id": "Q",
		"src": "http://files.spectralcoding.com/files/misc/lolwavs/VOBank_en_US/0049_female1_OnChampionPentaKillYo.wav",
		"key": 81,
		"name": "Pentakill"
	},
	"87": {
		"id": "W",
		"src": "http://files.spectralcoding.com/files/misc/lolwavs/LoL_SFX_summoner/44_summonerspell_base_heal_oc_01.wav",
		"key": 87,
		"name": "Heal"
	},
	"69": {
		"id": "E",
		"src": "http://files.spectralcoding.com/files/misc/lolwavs/LoL_SFX_summoner/48_summonerspell_base_ignite_oba.wav",
		"key": 69,
		"name": "Ignite"
	},
	"65": {
		"id": "A",
		"src": "http://files.spectralcoding.com/files/misc/lolwavs/LoL_SFX_summoner/31_summonerspell_base_flash_oc_0.wav",
		"key": 65,
		"name": "Flash"
	},
	"83": {
		"id": "S",
		"src": "http://files.spectralcoding.com/files/misc/lolwavs/LoL_SFX_summoner/57_summonerspell_base_teleport_m.wav",
		"key": 83,
		"name": "Teleport"
	},
	"68": {
		"id": "D",
		"src": "http://files.spectralcoding.com/files/misc/lolwavs/LoL_SFX_summoner/56_summonerspell_base_smite_oh_0.wav",
		"key": 68,
		"name": "Smite"
	},
	"90": {
		"id": "Z",
		"src": "http://files.spectralcoding.com/files/misc/lolwavs/LoL_SFX_summoner/25_summonerspell_base_exhaust_ob.wav",
		"key": 90,
		"name": "Exhaust"
	},
	"88": {
		"id": "X",
		"src": "http://files.spectralcoding.com/files/misc/lolwavs/LoL_SFX_summoner/14_summonerspell_base_barrier_ob.wav",
		"key": 88,
		"name": "Barrier"
	},
	"67": {
		"id": "C",
		"src": "http://files.spectralcoding.com/files/misc/lolwavs/VOBank_en_US/0022_female1_OnAce_1.wav",
		"key": 67,
		"name": "Ace"
	}
}

function DrumPad(props){
  const {name, src, key, id} = props.pad;
  
  return(
    <div key={key} id={id} class="drum-pad" 
      onClick={() => props.onClick(key)}>
      {id}
      <audio src={src} class="clip" id={id} 
          style={{'display':'none'}}>
      </audio>
    </div>
  )
}

function Drum({keys}){
  const [crrSound, setSound] = React.useState();
                         
  const playSound = (key) => {
    console.log(key);
    document.getElementById(pads[key].id).getElementsByClassName("clip")[0].play()
    setSound(pads[key].name);
  }
  
  const playKeySound = (e) => {
    let key = e.keyCode;
    if (keys.includes(key))
      playSound(key)
  }
  
  React.useEffect(() => {
    // Actualiza el título del documento usando la API del navegador
    document.addEventListener("keydown", playKeySound, false);
  }, []);

  return(
    <React.Fragment>  
      {keys.map(p => 
       <DrumPad pad={pads[p]} 
         onClick={playSound}/>)}
      <div id='display'>{crrSound}</div>
    </React.Fragment>
  )
}

 function App(props){
   const order = [81,87,69,65,83,68,90,88,67]
  return (<Drum keys = {order}/>)
}

ReactDOM.render(
  <App/>,
  document.getElementById('drum-machine')
);