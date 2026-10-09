import QtQuick
import ColorHelpers

Rectangle {
	objectName: 'root'
	width: 32
	height: 32
	property real candidateWidthHue: picker.widthHue

	PickerHsv {
		id: picker
		anchors.fill: parent
	}
}
