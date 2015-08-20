#pragma strict

var gravity: Vector3;
var acceleration: Vector3;

function Awake () {
	Screen.sleepTimeout = SleepTimeout.NeverSleep;
}

function Start () {
	if (Application.platform == RuntimePlatform.Android) {
		Input.gyro.enabled = true;
	}
}

function Update () {
	if (Application.platform == RuntimePlatform.Android) {
		var gyro: Quaternion = Input.gyro.attitude;
		this.transform.localRotation = Quaternion.Euler(90, 0, 0) * (new Quaternion(-gyro.x, -gyro.y, gyro.z, gyro.w));
	}
	else if (Application.platform == RuntimePlatform.OSXEditor) {
		if (Input.GetKey(KeyCode.UpArrow)) {
			this.transform.Rotate(Vector3.right, -1);
		}
		if (Input.GetKey(KeyCode.DownArrow)) {
			this.transform.Rotate(Vector3.right, 1);
		}
		if (Input.GetKey(KeyCode.LeftArrow)) {
			this.transform.Rotate(Vector3.up, -1, Space.World);
		}
		if (Input.GetKey(KeyCode.RightArrow)) {
			this.transform.Rotate(Vector3.up, 1, Space.World);
		}
		if (Input.GetKey(KeyCode.Space)) {
			this.transform.rotation = Quaternion.Euler(0, 0, 0);
		}
	}
	
	var alpha = 0.8;
	gravity = alpha * gravity + (1 - alpha) * Input.acceleration;
  	var linear_acceleration = Input.acceleration - gravity;
  	acceleration = alpha * acceleration + (1 - alpha) * linear_acceleration;

	if (Time.realtimeSinceStartup > 2.0) {
		GetComponent(Rigidbody).AddForce(acceleration.x * 100, acceleration.y * 100, acceleration.z * -100, ForceMode.Acceleration);
	}
}

function Reset() {
	this.transform.rotation = Quaternion.Euler(30, 0, 0);
	this.transform.position = Vector3(0, 2, -2);
}
