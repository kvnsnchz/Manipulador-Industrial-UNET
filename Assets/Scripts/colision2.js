#pragma strict
var moMano: MoviMano1;
var moMano2: MoviMano2;
var muneca: GameObject;
var mano: GameObject;
function OnCollisionEnter (col : Collision)
{     Debug.Log("estoy colisionando");
      moMano = GameObject.Find("mano1").GetComponent(MoviMano1);
      if(!moMano.tomado){
          Debug.Log("colision");
	      if(moMano.enColision){
		        if(GameObject == GameObject.Find("brazofinal")){
			       Debug.Log("Hola");
			    }
		      moMano.tomado=true;
		      moMano.este = GameObject.Find(col.gameObject.name);
		      moMano.este.GetComponent.<Rigidbody>().useGravity = false;
		      var v: Vector3;
		     // v = moMano.este.transform.position;
		      muneca = GameObject.Find("muneca2"); 
		     mano = GameObject.Find("puesto");
		     mano.transform.localScale = moMano.este.transform.lossyScale;
		     mano.transform.position = moMano.este.transform.position;
		     //mano.transform.parent = muneca.transform;
		     moMano.este.GetComponent.<Rigidbody>().isKinematic= true;

		      //v =muneca.transform.position- moMano.este.transform.localPosition;
		      //var rb = muneca.GetComponent.<Rigidbody>();
		      // var joint= moMano.este.gameObject.AddComponent(FixedJoint);
         	  //joint.connectedBody=rb;
		      //moMano.este.transform.parent = muneca.transform;
		     moMano.distancia = v;
		      moMano.distancia = -moMano.este.transform.position+mano.transform.localPosition;
	      }
	      else{
	        moMano2 = GameObject.Find("mano2").GetComponent(MoviMano2);
	        moMano2.enColision = true;
	      }

      }

}