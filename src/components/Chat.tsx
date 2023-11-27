'use client'


import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { Button } from './ui/button'
import { Card, CardTitle, CardDescription, CardContent, CardFooter, CardHeader } from './ui/card'
import {  Input } from './ui/input'
import { useChat } from 'ai/react'
import { ScrollArea } from './ui/scroll-area'

export default function Chat() {
    const { messages, input, handleInputChange, handleSubmit} = useChat({
        api: '/api/chat',
    })
  return (
    <Card className='w-[440px]'>
        <CardHeader>
          <CardTitle>Chat IA</CardTitle>
          <CardDescription>Chat em desenvolvimento pela eCLICK Sistemas</CardDescription>
        </CardHeader>
        <CardContent>
            <ScrollArea className='h-[500px] w-full pr-4'>
                {messages.map(message => {
                    return (
                        <div key={message.id} className='flex gap-2 text-slate-600 text-sm mt-4'>
                            {message.role === 'user' && (
                                <Avatar>
                                <AvatarFallback>DF</AvatarFallback>
                                <AvatarImage src='https://github.com/wandersonzz.png' />
                                </Avatar>
                            )}

                            {message.role === 'assistant' && (
                                <Avatar>
                                <AvatarFallback>DF</AvatarFallback>
                                <AvatarImage src='https://github.com/microsoft.png' />
                                </Avatar>
                            )}

                            <p className='leading-relaxed'>
                                <span className='block font-bold text-slate-700'>{message.role === 'user' ? 'Usuário' : 'IA'}</span>
                                {message.content}
                            </p>
                        </div>
                    )   
                })}
            </ScrollArea>
        </CardContent>
        

        <CardFooter>
            <form className='w-full flex  gap-2' onSubmit={handleSubmit}>
                <Input placeholder='Como posso ajudá-lo?' value={input} onChange={handleInputChange}/>
                <Button type='submit'>Send</Button>
            </form>
        </CardFooter>
      </Card>
  )
}
