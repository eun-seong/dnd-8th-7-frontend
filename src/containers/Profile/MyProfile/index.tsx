import { useEffect } from 'react'
import clsx from 'clsx'

import useHttpRequest from '@/hooks/useHttpRequest'
import { dayBlockAPI } from '@/api'
import { BASE_URL } from '@/constants/urls'

import rnWebViewBridge from '@/utils/react-native-webview-bridge/new-webview/rnWebViewBridge'

import List from '@/components/List'
import { PATH } from '@/constants/path'
import ProfileHeader from './ProfileHeader'

const SETTING_LIST = [
  {
    id: PATH.editProfile,
    title: '프로필 편집',
  },
  {
    id: PATH.savedBlock,
    title: '저장한 블럭',
  },
  {
    id: PATH.agreements,
    title: '약관 확인',
  },
]

export default function MyProfileContainer() {
  const [myProfile, fetchMyProfile, isLoading] = useHttpRequest(() =>
    dayBlockAPI.getMyProfile().then(({ data }) => data),
  )

  const handleItemClick = (path: string) => {
    rnWebViewBridge.open({
      key: 'newWebView',
      url: BASE_URL + path,
    })
  }

  useEffect(() => {
    fetchMyProfile()
  }, [])

  return (
    <div className={clsx('py-[30px]')}>
      <div className={clsx('px-[20px]', 'mb-[14px]')}>
        <ProfileHeader
          percentage={0}
          user={myProfile?.user || ''}
          imgSrc={myProfile?.imgPath}
        />
        <div
          className={clsx(
            'py-4',
            'px-4',
            'rounded-lg',
            'bg-gray-50',
            'text-base',
            'text-textGray-200',
          )}
        >
          {myProfile?.introduction}
        </div>
      </div>
      <List items={SETTING_LIST} onItemClick={handleItemClick} />
    </div>
  )
}
