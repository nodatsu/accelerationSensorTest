#pragma strict

var gravity: Vector3;
var acceleration: Vector3;
var resetTime: int;

function Awake () {
	Screen.sleepTimeout = SleepTimeout.NeverSleep;
}

function Start () {
	if (Application.platform == RuntimePlatform.Android) {
		Input.gyro.enabled = true;
	}
	
	Reset();
	resetTime = Time.time;
}

function Update () {
	if (Application.platform == RuntimePlatform.Android) {
		var gyro: Quaternion = Input.gyro.attitude;
		this.transform.localRotation = Quaternion.Euler(90, 0, 0) * (new Quaternion(-gyro.x, -gyro.y, gyro.z, gyro.w));
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
	
	var alphaG = 0.8;
	gravity = alphaG * gravity + (1 - alphaG) * Input.acceleration;
  	var linear_acceleration = Input.acceleration - gravity;
	var alphaA = 0.9;
  	acceleration = alphaA * acceleration + (1 - alphaA) * linear_acceleration;

	if (Time.time - resetTime > 2.0) {
		GetComponent(Rigidbody).AddForce(acceleration.x * 100, acceleration.y * 100, acceleration.z * -100, ForceMode.Acceleration);
	}
}

function Reset() {
	this.transform.rotation = Quaternion.Euler(0, 0, 0);
	this.transform.position = Vector3(0, 1, -2);
	GetComponent(Rigidbody).angularVelocity = Vector3.zero;
	GetComponent(Rigidbody).velocity = Vector3.zero;

	resetTime = 0;
}
