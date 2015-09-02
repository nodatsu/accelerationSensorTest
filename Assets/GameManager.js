#pragma strict

function OnApplicationPause(pauseStatus: boolean)
{
	if (Application.platform == RuntimePlatform.Android) {
		if (pauseStatus) {
			Application.Quit();	
		}
	}
}