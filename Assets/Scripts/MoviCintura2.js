#pragma strict

var cintura: GameObject;
var transCint: Transform;
var AnteBrazo: GameObject;
var rbAnteBrazo: Rigidbody;
function Start() {
    cintura = GameObject.Find("cintura");
    transCint = cintura.transform;
    AnteBrazo = GameObject.Find("AnteBrazo");
    rbAnteBrazo = AnteBrazo.GetComponent.<Rigidbody>();
}

function Update () {
  
  if(Input.GetKey(KeyCode.D)){
   // rbAnteBrazo.isKinematic=false;

    transform.RotateAround (transCint.position, Vector3.up, 30 * Time.deltaTime);
  }
  else{
     if(Input.GetKey(KeyCode.I)){
    // rbAnteBrazo.isKinematic=false;
       transform.RotateAround(transCint.position,Vector3.down,30*Time.deltaTime);
     }
  }
}