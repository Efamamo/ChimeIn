import ThreadCard from '@/components/cards/EchoCard';
import Comment from '@/components/forms/Comment';
import { fetchThreadById } from '@/lib/actions/thread.actions';
import { fetchUser } from '@/lib/actions/user.actions';
import { currentUser } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import React from 'react';

export default async function Page({ params }: { params: { id: string } }) {
  if (!params.id) return null;
  const user = await currentUser();

  if (!user) return null;

  const userInfo = await fetchUser(user.id);

  if (!userInfo?.onBoarded) redirect('/onboarding');

  const thread = await fetchThreadById(params.id);

  return (
    <section
      className={`w-full h-full relative  max-w-4xl
    `}
    >
      <div>
        <ThreadCard
          key={thread._id}
          id={thread._id}
          currentUserId={user?.id || ''}
          parentId={thread.parentId}
          content={thread.text}
          author={thread.author}
          community={thread.community}
          createdAt={thread.createdAt}
          comments={thread.children}
          likes={thread.likes}
          navigate={true}
          reposts={thread.reposts}
        />
      </div>
      <div className="mt-7 ">
        <Comment
          threadId={thread.id}
          currentUserImage={userInfo.image}
          currentUserId={JSON.stringify(userInfo._id)}
        />
      </div>

      <div className="mt-10 flex flex-col gap-6">
        {thread.children.map((child: any) => (
          <ThreadCard
            key={child._id}
            id={child._id}
            currentUserId={user?.id || ''}
            parentId={child.parentId}
            content={child.text}
            author={child.author}
            community={child.community}
            createdAt={child.createdAt}
            comments={child.children}
            isComment={true}
            dis={true}
            likes={child.likes}
            reposts={child.reposts}
          />
        ))}
      </div>
    </section>
  );
}
