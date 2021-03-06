# Fractals from chaos game
I was fascinated by the fractal like and intricate shapes generated by a game with "seemingly" simple rules as was shown in a Numberphile video, and wished to recreate the images in javascript, and in VPython, to understand the nuances of fractals.
## The chaos game

[Link to the Numberphile video](https://www.youtube.com/watch?v=kbKtFN71Lfs)

[The original paper : CHAOS GAME REPRESENTATION](https://arxiv.org/pdf/2012.09638.pdf)

- An arbitrary 2D shape is selected, and a random point is drawn inside or outside the area. Every vertex of the shape is given equal weightage, and for each iteration one of the vertex is selected at random.
- The next point is drawn at half the distance between the random initial point P_i, and the selected vertex under consideration. 
  vec(P_(i + 1)) = (vec(P_(i)) + vec(Random_vertex)) / 2
- This is continued for a large number of points.
The result is the following image, when the considered shape is a "fairly" normal looking triangle. This is the "Sierpinski Triangle", a triangle that contains infinite self-images of itself.
![alt text](https://github.com/ashish-kp/fractals_from_chaos_game/blob/main/triangle.png?raw=true)

Similar images and more fascinating ones are given in this wikipedia article. [Link to Chaos game](https://www.wikiwand.com/en/Chaos_game)
The same was tried for a square, but then , it turns out the rules have to be a little more complex, to obtain any such fractal images.
It is just messy looking dots, so I haven't added the image for it.
But for pentagons, the simple rules, gave a somewhat incoherent, but nevertheless, fractal like image.
![alt text](https://github.com/ashish-kp/fractals_from_chaos_game/blob/main/norm_pent.png)

### Tweaked rules
As of yet, for the pentagon game, the following additional rule(s) is added:
- If the randomly obtained vertex, is the same as that which was obtained in a previous iteration, then that is to be ignored, and the "dice" so to speak, must be rolled again.
For a pentagon, the following image was obtained.
![alt text](https://github.com/ashish-kp/fractals_from_chaos_game/blob/main/twisted_pent.png)

## Specific points and probabilities give beautiful shapes like this:

![alt text](https://github.com/ashish-kp/fractals_from_chaos_game/blob/main/fern.png)

## Square

For a square, following the usual rules, yielded no fractals. To create a menger sponge like 2d shape (as given in the wikipedia page), the vertices and the center of the sides, in total 8 points should be taken into consideration. After each iteration, the point usually moves to half the distance (0.5) of the next point. I tried moving the point to 0.35 times the distance of the next point, to get a nice (or so I would say) Menger Sponge. But I don't know whether 0.35 gives the most precise looking Menger Sponge though [Sim here](https://www.glowscript.org/#/user/p.b.ashish786/folder/game/program/mengersponge)(disclaimer here).

These were first tried out in VPython, and the links are below:
- [triangle](https://www.glowscript.org/#/user/p.b.ashish786/folder/game/program/trianglegame)
- [square](https://www.glowscript.org/#/user/p.b.ashish786/folder/game/program/quadranglegame)
- [twisted pentagon](https://www.glowscript.org/#/user/p.b.ashish786/folder/game/program/pentagongame)
- [Fern](https://www.glowscript.org/#/user/p.b.ashish786/folder/game/program/IFS2)

(I am just beginning to learn JS, so the code might be messy.)
