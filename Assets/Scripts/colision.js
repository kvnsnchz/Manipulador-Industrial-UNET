#pragma strict
var moMano: MoviMano1;
var moMano2: MoviMano2;
var mano: GameObject;
var muneca: GameObject;
function OnCollisionEnter (col : Collision)
{     moMano = GameObject.Find("mano1").GetComponent(MoviMano1);
      Debug.Log("Esta colisionando mano 1");
      if(!moMano.tomado){
          Debug.Log("colision");
	      moMano2 = GameObject.Find("mano2").GetComponent(MoviMano2);
	      if(moMano2.enColision){
		      if(GameObject == GameObject.Find("brazofinal")){
		       Debug.Log("Hola");
		      }

		      moMano.tomado=true;
		      //var muneca: GameObject;
		      //muneca = GameObject.Find("puesto");
		      //var este: GameObject;
		      moMano.este = GameObject.Find(col.gameObject.name);
		      moMano.este.GetComponent.<Rigidbody>().useGravity = false;
		      mano = GameObject.Find("mano2");
		      moMano.distancia = -moMano.este.transform.position+mano.transform.localPosition;
		      var v: Vector3;
		      var escala: Vector3;
		      escala = moMano.este.transform.localScale;


		      muneca = GameObject.Find("muneca2");
		      v =muneca.transform.position- moMano.este.transform.localPosition; 
		      muneca = GameObject.Find("muneca2"); 
		     mano = GameObject.Find("puesto");
		     mano.transform.localScale = moMano.este.transform.lossyScale;
		     mano.transform.position = moMano.este.transform.position;
		     moMano.este.GetComponent.<Rigidbody>().isKinematic= true;
		     //mano.transform.parent = muneca.transform;
	          // moMano.este.transform.parent = muneca.transform;
		      //var rb = muneca.GetComponent.<Rigidbody>();
		      //var joint = moMano.este.gameObject.AddComponent(FixedJoint);
         	  //joint.connectedBody=rb;
		      
		     //moMano.distancia = v;
		     // moMano.este.transform.localScale = escala;
		        //este.transform.parent = muneca.transform;
		        //este.transform.localPosition = muneca.transform.position;
		       // este.transform.localRotation = Quaternion.identity;
		     // este.transform.parent = muneca.transform;
		  }
		 else{
		     moMano.enColision = true;
		}
      }


  
}