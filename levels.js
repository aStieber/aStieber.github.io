var LEVELS_DATA = [
    {
        "id": 0,
        "text": "Debug Level",
        "revertCount": 9999,
        "marbleStart": {"x": 10, "y": 1},
        "terrain": [
            {"kind": "ground", "p1": {"x": 0, "y": 0}, "p2": {"x": 25,"y": 0}},
            {"kind": "ice", "p1": {"x": 25, "y": 0}, "p2": {"x": 40,"y": 0}},
            {"kind": "glue", "p1": {"x": 40, "y": 0}, "p2": {"x": 55,"y": 0}},
            {"kind": "lava", "p1": {"x": 55, "y": 0}, "p2": {"x": 70,"y": 0}},
        ],
        "dynamics": [
            {"kind": "seesaw", "fulcrum": {"x": 20, "y": 1}, "length": 4, "height": 0.05, "maxAngle": 8., "initImpulse": 0}
        ],
        "objectives": [
            {"kind": "coin", "topLeft": {"x": 5,"y": 1}},
            {"kind": "finish", "topLeft": {"x": 2,"y": 1}}
        ]
    },
    {
        "text": "Beginner 1 - A Lesson In Position",
        "revertCount": 1,
        "marbleStart": {"x": 10, "y": 3.25},
        "terrain": [
            {"kind": "ground", "p1": {"x": 9, "y": 3}, "p2": {"x": 14,"y": 2.5}},
            {"kind": "ground", "p1": {"x": 13, "y": 2}, "p2": {"x": 17,"y": 1.5}},
            {"kind": "ground", "p1": {"x": 16, "y": 1}, "p2": {"x": 20,"y": .5}},
            {"kind": "ground", "p1": {"x": 19, "y": 0}, "p2": {"x": 23,"y": -.5}},
            {"kind": "ground", "p1": {"x": 22, "y": -1}, "p2": {"x": 26,"y": -1.5}},
            {"kind": "ground", "p1": {"x": 26, "y": -1.5}, "p2": {"x": 35,"y": -1.5}},
            {"kind": "ground", "p1": {"x": 38, "y": -1}, "p2": {"x": 38,"y": -5}}, //fulcrum
            {"kind": "ground", "p1": {"x": 38, "y": 0}, "p2": {"x": 38,"y": 5}}, 
            {"kind": "ground", "p1": {"x": 35, "y": -1.5}, "p2": {"x": 35,"y": -5}},
            {"kind": "lava", "p1": {"x": 35, "y": -5}, "p2": {"x": 37.8,"y": -5}},
            {"kind": "ground", "p1": {"x": 38, "y": -1}, "p2": {"x": 38,"y": -5}},
            {"kind": "ground", "p1": {"x": 41, "y": -1.5}, "p2": {"x": 47,"y": -.5}},
            {"kind": "ground", "p1": {"x": 47, "y": -.5}, "p2": {"x": 52,"y": 1}},
            {"kind": "ground", "p1": {"x": 52, "y": 1}, "p2": {"x": 53,"y": 3}},
            {"kind": "ground", "p1": {"x": 38, "y": -3}, "p2": {"x": 42,"y": -4}},
            {"kind": "ground", "p1": {"x": 42, "y": -4}, "p2": {"x": 47, "y": -.5}}            
        ],
        "dynamics": [
            {"kind": "seesaw", "fulcrum": {"x": 38, "y": -1}, "length": 3.25, "height": 0.05, "maxAngle": 8., "initImpulse": 100}
        ],
        "objectives": [
            {"kind": "coin", "topLeft": {"x": 32,"y": -1}},
            {"kind": "coin", "topLeft": {"x": 51,"y": 1.25}},
            {"kind": "finish", "topLeft": {"x": 42,"y": -3.5}}
        ]
    }
    ,{
        "text": "Beginner 2 - A Lesson In Momentum",
        "revertCount": 1,
        "marbleStart": {"x": 4.5, "y": 7},
        "terrain": [
            {"kind": "ice", "p1": {"x": 3.75, "y": 8}, "p2": {"x": 3.75, "y": 2}},
            {"kind": "ice", "p1": {"x": 3.75, "y": 2}, "p2": {"x": 4.5, "y": 0}},
            {"kind": "ice", "p1": {"x": 4.5, "y": 0}, "p2": {"x": 6, "y": -2}},
            {"kind": "ice", "p1": {"x": 6, "y": -2}, "p2": {"x": 9.5, "y": -4}},
            {"kind": "ice", "p1": {"x": 9.5, "y": -4}, "p2": {"x": 14, "y": -5.5}},
            {"kind": "ice", "p1": {"x": 14, "y": -5.5}, "p2": {"x": 19, "y": -6}},
            {"kind": "ice", "p1": {"x": 19, "y": -6}, "p2": {"x": 25, "y": -6}},
            {"kind": "ice", "p1": {"x": 25, "y": -6}, "p2": {"x": 27, "y": -5.5}},

            {"kind": "ice", "p1": {"x": 48, "y": -.5}, "p2": {"x": 54, "y": -3.5}},
            {"kind": "ice", "p1": {"x": 54, "y": -3.5}, "p2": {"x": 54, "y": 0}},

            {"kind": "ground", "p1": {"x": 39.5, "y": -8.25}, "p2": {"x": 41, "y": -8.25}},
        ],
        "objectives": [
            {"kind": "coin", "topLeft": {"x": 53,"y": -2.75}},
            {"kind": "coin", "topLeft": {"x": 40,"y": -6}},
            {"kind": "finish", "topLeft": {"x": 40,"y": -8}}
        ]
    }
    ,{
        "text": "Beginner 3 - Puttin' On The Brakes",
        "revertCount": 2,
        "marbleStart": {"x": 4.5, "y": 7},
        "terrain": [
            {"kind": "ice", "p1": {"x": 3.75, "y": 8}, "p2": {"x": 3.75, "y": 2}},
            {"kind": "ice", "p1": {"x": 3.75, "y": 2}, "p2": {"x": 4.5, "y": 0}},
            {"kind": "ice", "p1": {"x": 4.5, "y": 0}, "p2": {"x": 6, "y": -2}},
            {"kind": "ice", "p1": {"x": 6, "y": -2}, "p2": {"x": 9.5, "y": -4}},
            {"kind": "ice", "p1": {"x": 9.5, "y": -4}, "p2": {"x": 14, "y": -5.5}},
            {"kind": "ice", "p1": {"x": 14, "y": -5.5}, "p2": {"x": 19, "y": -6}},
            {"kind": "ice", "p1": {"x": 19, "y": -6}, "p2": {"x": 25, "y": -6}},
            {"kind": "ice", "p1": {"x": 25, "y": -6}, "p2": {"x": 27, "y": -5.5}},
            {"kind": "ice", "p1": {"x": 48, "y": -.5}, "p2": {"x": 54, "y": -2.6}},
            {"kind": "ground", "p1": {"x": 54, "y": -3.5}, "p2": {"x": 78, "y": -8}},
            {"kind": "ground", "p1": {"x": 48, "y": -3.5}, "p2": {"x": 54, "y": -3.5}},
            {"kind": "ground", "p1": {"x": 48, "y": -3.5}, "p2": {"x": 48, "y": -.48}},
            {"kind": "lava", "p1": {"x": 78, "y": 0}, "p2": {"x": 78, "y": -8}},


        ],
        "objectives": [
            {"kind": "coin", "topLeft": {"x": 74, "y": -7}},
            {"kind": "finish", "topLeft": {"x": 49, "y": -3}}
        ]
    },
    {
        "text": "Intermediate 1 - Just Rollin'",
        "revertCount": 0,
        "marbleStart": {"x": 12, "y": 1},
        "terrain": [
            {"kind": "ground", "p1": {"x": 10, "y": 0}, "p2": {"x": 25,"y": 0}},
            {"kind": "ground", "p1": {"x": 25,"y": 0}, "p2": {"x": 30,"y": 0.25}},
            {"kind": "ground", "p1": {"x": 30,"y": 0.25}, "p2": {"x": 35,"y": 1}},
            {"kind": "ground", "p1": {"x": 35,"y": 1}, "p2": {"x": 40,"y": 2.5}},
            {"kind": "ground", "p1": {"x": 54,"y": 1}, "p2": {"x": 59,"y": -2}},

            {"kind": "ground", "p1": {"x": 10, "y": 4}, "p2": {"x": 25,"y": 4}},
            {"kind": "ground", "p1": {"x": 25,"y": 4}, "p2": {"x": 30,"y": 4.25}},
            {"kind": "ground", "p1": {"x": 30,"y": 4.25}, "p2": {"x": 35,"y": 5}},
            {"kind": "ground", "p1": {"x": 35,"y": 5}, "p2": {"x": 40,"y": 6}},

            {"kind": "ice", "p1": {"x": 59,"y": -2}, "p2": {"x": 61.5, "y": -2.5}},
            {"kind": "ice", "p1": {"x": 61.5, "y": -2.5}, "p2": {"x": 64,"y": -2}},
            {"kind": "ground", "p1": {"x": 64,"y": -2}, "p2": {"x": 69,"y": 1.25}},
            {"kind": "glue", "p1": {"x": 69,"y": 1.25}, "p2": {"x": 71,"y": 1.25}},
            {"kind": "glue", "p1": {"x": 70.5, "y": 3.5}, "p2": {"x": 75.5,"y": 9}}
        ],
        "objectives": [
            {"kind": "coin", "topLeft": {"x": 70.5,"y": 2}},
            {"kind": "coin", "topLeft": {"x": 20,"y": .25}},
            {"kind": "finish", "topLeft": {"x": 10,"y": 4.25}}
        ]
    }
    ,{
        "text": "Intermediate 2 - Just Rollin' & Warpin'",
        "revertCount": 1,
        "marbleStart": {"x": 11, "y": -4.5},
        "terrain": [
            {"kind": "ground", "p1": {"x": 10, "y": -5}, "p2": {"x": 50,"y": -5}},
            {"kind": "ground", "p1": {"x": 50,"y": -5}, "p2": {"x": 56,"y": -4.5}},
            {"kind": "ground", "p1": {"x": 56,"y": -4.5}, "p2": {"x": 60,"y": -3.75}},
            {"kind": "ground", "p1": {"x": 60,"y": -3.75}, "p2": {"x": 64,"y": -1.5}},
            {"kind": "lava", "p1": {"x": 64,"y": -2.5}, "p2": {"x": 76,"y": 4.25}},
            {"kind": "glue", "p1": {"x": 54,"y": 0}, "p2": {"x": 64,"y": 5}},
            {"kind": "ground", "p1": {"x": 64,"y": 5}, "p2": {"x": 68,"y": 6}},
            {"kind": "ground", "p1": {"x": 68,"y": 6}, "p2": {"x": 78,"y": 6}},
        ],
        "objectives": [
            {"kind": "coin", "topLeft": {"x": 62.5,"y": .25}},
            {"kind": "coin", "topLeft": {"x": 51.5,"y": 1}},
            {"kind": "finish", "topLeft": {"x": 77,"y": 6.25}}
        ]
    }

]