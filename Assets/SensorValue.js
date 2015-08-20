#pragma strict

function Start() {
	gameObject.GetComponent(UI.Text).text = "test";
}

function Update () {
	var str: String;
	
	str = "X: " + Input.acceleration.x + "\nY: " + Input.acceleration.y
		+ "\nZ: " + Input.acceleration.z;
	
	gameObject.GetComponent(UI.Text).text = str;
}