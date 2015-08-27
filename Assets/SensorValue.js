#pragma strict

function Start() {
}

function Update () {
	var str = "X: " + Input.gyro.userAcceleration.x
	        + "\nY: " + Input.gyro.userAcceleration.y
	        + "\nZ: " + Input.gyro.userAcceleration.z;
		
	gameObject.GetComponent(UI.Text).text = str;
}