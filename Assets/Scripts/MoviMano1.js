#pragma strict
//var muneca: GameObject;
//var rbAnteBrazo: Rigidbody;
//var esfera: GameObject;
var tomado: boolean;
var enColision: boolean;
var puesto: GameObject;
 var este: GameObject;
 var mano: GameObject;
 var moMano2: MoviMano2;
 var distancia: Vector3;
function star(){
    //muneca = GameObject.Find("muneca2");
    tomado=false;
    enColision = false;
    distancia = new Vector3(0,0,0);
     
}
function FixedUpdate () {
   
  if(Input.GetKey(KeyCode.B) && !tomado){
    transform.Translate(new Vector3(-2,0,0)*Time.deltaTime);
 }
 else{
     if(Input.GetKey(KeyCode.N)){
        if(tomado){
             moMano2= GameObject.Find("mano2").GetComponent(MoviMano2);
             moMano2.enColision = false;
             enColision = false;
             tomado = false;
             este.GetComponent.<Rigidbody>().useGravity=true;
        }
        transform.Translate(new Vector3(2,0,0)*Time.deltaTime);
     }
 }
 if(tomado){
	 puesto = GameObject.Find("puesto");
	 Debug.Log("si fue tomado");
	 mano = GameObject.Find("puesto");
	 este.transform.position= mano.transform.position;
	 este.transform.rotation = mano.transform.localRotation;
	
 }

}
