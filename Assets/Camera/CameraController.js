#pragma strict

var velocity = Vector3.zero;
var translation = Vector3.zero;
private var origin: Vector3;

function Awake () {
	Screen.sleepTimeout = SleepTimeout.NeverSleep;
}

function Start () {
	if (Application.platform == RuntimePlatform.Android) {
		Input.gyro.enabled = true;
	}
	origin = transform.position;
	
	Reset();
}

function Update () {
	if (Application.platform == RuntimePlatform.Android) {
		var gyro: Quaternion = Input.gyro.attitude;
		this.transform.localRotation = Quaternion.Euler(90, 0, 0) * (new Quaternion(-gyro.x, -gyro.y, gyro.z, gyro.w));

		velocity += Input.gyro.userAcceleration * Time.deltaTime * 10;
		translation += velocity * Time.deltaTime;
		transform.position = origin + translation;
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
	
	if (transform.position.magnitude > 5) {
		velocity = Vector3.zero;
	} 
}

function Reset() {
	transform.rotation = Quaternion.Euler(0, 0, 0);
	transform.position = origin;
	velocity = Vector3.zero;
	translation = Vector3.zero;
}
