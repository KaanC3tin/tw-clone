import React from 'react'
import RightbarLayout, { RightbarLayoutProps } from './RightbarLayout';
import { useAccount } from '@/lib/hook';
import { whoFollowUsers } from '@/mock/page';
import UserCard from './UserCard';




export default function WhoFollowMe<T>({ title, more }: RightbarLayoutProps<T>) {


    const account = useAccount()
    return (
        <div>
            <RightbarLayout
                title={"Who to follow"}
                more={`/i/connect_people?user_id=${account?.id}`}>
                {whoFollowUsers.map(user => <UserCard user={user} key={user.id} />)}
                <div>
                </div>
            </RightbarLayout>
        </div>
    )
}
