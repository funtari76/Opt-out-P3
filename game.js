def scene1():
    import time
print(""
        "WELCOME TO THE ADVENTURE GAME!

        Shanti wakes up in her bedroom in the middle of the night.She heard a loud BAN outside the house.
        Now she has two choices she can either stay in the room or check what the sound might be about.Type your choice: Stay or Evaluate ?
        ""
        ")


c1 = input()
time.sleep(2)
ans = 'incorrect'
while(ans=='incorrect'):
    if(c1.upper()=="STAY"):
        print("nShati decides to stay in the room and ends up staying inside forever as noone seems to come to help her.")
        ans = 'correct'")