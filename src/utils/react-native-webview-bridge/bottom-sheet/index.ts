import {
  BottomSheetType,
  ListBottomSheetContents,
} from '@/utils/react-native-webview-bridge/types/bottomSheet.type'
import { EMessageType, MessageData } from '../types/common.type'
import webBridge from '@/utils/react-native-webview-bridge'

function open(
  data: MessageData<{
    type: BottomSheetType
    props: ListBottomSheetContents
  }>,
) {
  if (window?.ReactNativeWebView) {
    webBridge.sendMessage(EMessageType.OPEN_BOTTOM_SHEET, data)
  }
}

function close(
  data: MessageData<{
    type: BottomSheetType
  }>,
) {
  if (window?.ReactNativeWebView) {
    webBridge.sendMessage(EMessageType.CLOSE_BOTTOM_SHEET, data)
  }
}

const RNBottomSheet = {
  open,
  close,
}
export default RNBottomSheet