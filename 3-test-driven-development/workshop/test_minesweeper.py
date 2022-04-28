import pytest
import minesweeper

def test_map_too_big():
    with pytest.raises(Exception):
        minesweeper.main('./txts/map_too_big.txt')

def test_invalid_char():
    with pytest.raises(Exception):
        minesweeper.main('./txts/invalid_char.txt')