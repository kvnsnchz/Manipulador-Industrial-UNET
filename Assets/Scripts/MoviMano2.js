#pragma strict
var enColision: boolean;
var puesto: GameObject;
var este: GameObject;
var moMano: MoviMano1;
function star(){
    enColision = false;
}
function FixedUpdate () {
   moMano = GameObject.Find("mano1").GetComponent(MoviMano1);
  if(Input.GetKey(KeyCode.B) && !moMano.tomado){
    transform.Translate (new Vector3(-2,0,0)*Time.deltaTime);
   }
  else{
     if(Input.GetKey(KeyCode.N)){
        transform.Translate(new Vector3(2,0,0)*Time.deltaTime);
     }
  }

}
