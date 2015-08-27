﻿#pragma strict

function Awake () {
	Screen.sleepTimeout = SleepTimeout.NeverSleep;
}

function Start () {
	if (Application.platform == RuntimePlatform.Android) {
		Input.gyro.enabled = true;
	}
	
	Reset();
}

function Update () {
	if (Application.platform == RuntimePlatform.Android) {
		var gyro: Quaternion = Input.gyro.attitude;
		this.transform.localRotation = Quaternion.Euler(90, 0, 0) * (new Quaternion(-gyro.x, -gyro.y, gyro.z, gyro.w));

		GetComponent(Rigidbody).AddForce(Input.gyro.userAcceleration * 100, ForceMode.Acceleration);
	}
	else if (Application.platform == RuntimePlatform.OSXEditor) {
		if (Input.GetKey(KeyCode.UpArrow)) {
			this.transform.Translate(Vector3.forward * 0.1);
		}
		if (Input.GetKey(KeyCode.DownArrow)) {
			this.transform.Translate(Vector3.back * 0.1);
		}
		if (Input.GetKey(KeyCode.LeftArrow)) {
			this.transform.Rotate(Vector3.up, -1, Space.World);
		}
		if (Input.GetKey(KeyCode.RightArrow)) {
			this.transform.Rotate(Vector3.up, 1, Space.World);
		}
	}	
}

function Reset() {
	this.transform.rotation = Quaternion.Euler(0, 0, 0);
	this.transform.position = Vector3(0, 1, -2);
	GetComponent(Rigidbody).angularVelocity = Vector3.zero;
	GetComponent(Rigidbody).velocity = Vector3.zero;
}
