#取得
import discord
import random

#定義
intents = discord.Intents.default()
intents.message_content = True
client = discord.Client(intents=intents)

#-----------------------
#on_message(message)
#-----------------------

@client.event
async def on_message(message):
    if message.author.bot:
        return
#返答 完全一致
    if message.content == "!option":
        await message.channel.send("正常に動いてるよ！")
#返答 部分一致
    if "おはよ" in message.content.lower():
        await message.channel.send("おはよう！びっくりした？")
    if "こんにち" in message.content.lower():
        await message.channel.send("こんにちは！")
    if "emoji_1" in message.content.lower():
        await message.channel.send("じゃあああん！！")
#選択式 
    if message.content == "!dkj":
	 janken = ["だかだかじゃんけんじゃんけんぽん！\nだかは無敵を出したのだ！\n僕の勝ちなのだ！","だかだかだかだかじゃんけんぽん！\n俺はチョキかパーのどっちかをだしたぞ！これで君のかちはない！\n明日も元気にいくぞー","だかだかだかだかじゃんけんぽん\n俺は🤟をだしたぞ！\n🖖を出した人の勝ちだ！\n明日があると思うなよ！" ,"だかだかだかだかじゃんけんぽん\n俺は負けを認めないぞ\n早く負けを認めるんだな！\nテスト楽しみやな","だかだかだかだかじゃんけんぽん\n俺は我が道を行くぞ\n君に邪魔する権利はない！よって私の勝ちだ！\n雑草でもたべてるんだな！","だかだかだかだかじゃんけんぽん！\n俺はスマホを投げ捨てたぞ！定期を失ったから帰れないぜ！！\nお前も歩いて帰るんだな！", "だかだかだかだかじゃんけんぽん\n俺はお前を裁判にかけるぞ！\n証拠は捏造したから俺の勝ちだだ！\n歴史はスタジオで作られるゾイ", "だかだかだかだかじゃんけんぽん\n俺は気分がいいぞ\nだから俺の勝ちだ！\n今日より良い明日はそう簡単には来ない", "だかだかじゃんけんじゃんけんぽん！\n俺はコインを投げて立たせたぜ！\nお前は俺の豪運に勝てない！\n明日は晴れるといいな！", "だかだかじゃんけんじゃんけんぽん！\nカラオケで喉を潰したお前は俺には勝てん！\n実質俺の勝ちだ！\n大人しくのど飴を食すんだな！！", "だかだかじゃんけんじゃんけんぽん！\n俺は最速で自転車事故を起こしたぞ！\nカゴを破壊したから俺の勝ちだ！\n来週も見てくれよな！", "だかだかじゃんけんじゃんけんぽん！\n俺はテストを放棄したぞ！\nこの潔さに勝てるやつはこの世にいない！\nよって俺が最強だ！\n大自然に感謝するんだな！","だかだかじゃんけんじゃんけんぽん！\n10d100で42を出したぞ！\nお前らには無理だから俺の勝ちだ！\n現実を見て単語帳でも枕にするんだな！", "だかだかじゃんけんじゃんけんぽん！\n俺は淹れたてのブラックコーヒーをこぼしたぞ！\nワイシャツが汚れなかったから俺の勝ちだ！\n芸術センスの塊だぜ！"]
        choice = random.choice(janken)
        await message.channel.send(choice)

#基本動作 
@client.event
async def on_ready():
    print(f'3. 2. 1. ぽかん !!{client.user} が 起動 した !!')
TOKEN = "botのTOKENを入力する"　#コピペを行う際はここを変更する
client.run(TOKEN)
