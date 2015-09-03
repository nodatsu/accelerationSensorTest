#pragma strict

function Start() {
}

function Update () {
	var str = "X: " + Input.gyro.rotationRate.x
	        + "\nY: " + Input.gyro.rotationRate.y
	        + "\nZ: " + Input.gyro.rotationRate.z;
		
	gameObject.GetComponent(UI.Text).text = str;
}