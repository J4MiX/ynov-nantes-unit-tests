import numpy
import sys

class Grille:
    mine = -1

    def __init__(self, nrows, ncols):
        self.nrows = nrows
        self.ncols = ncols
        self.field = numpy.zeros((nrows, ncols), dtype='int')

    def add_mine(self, row, col):
        if self.field[row][col] == Grille.mine:
            return

        self.field[row][col] = Grille.mine

        displacement = [-1, 0, 1]
        for i in displacement:
            for j in displacement:
                row2 = row + i
                col2 = col + j
                if row2 >= 0 and row2 < self.nrows:
                    if col2 >= 0 and col2 < self.ncols:
                        if self.field[row2][col2] != Grille.mine:
                            self.field[row2][col2] += 1

    def print(self):
        for row in range(self.nrows):
            s = ''
            for col in range(self.ncols):
                if self.field[row][col] == Grille.mine:
                    s += '*'
                else:
                    s += str(self.field[row][col])
                s += ' '

            print(s.rstrip())

def main(input):

    def count_things(line):
        return [int(x) for x in line.split()]

    mine = '*'
    accepted_chars = ['.', mine, '\n']

    grille = []
    if (input == ''):
        return
    fin = open(input, 'r')
    nrows, ncols = count_things(fin.readline())
    if (nrows < 0 or ncols > 100):
        raise Exception('Map too big, aborting (nrows, ncols) = ({}, {})'.format(nrows, ncols))

    while nrows > 0 and ncols > 0:
        g = Grille(nrows, ncols)
        for row in range(nrows):
            x = 0
            for token in fin.readline():
                if token not in accepted_chars:
                    raise Exception('Invalid character {} in line {}'.format(token, row))
                elif token == mine:
                    g.add_mine(row, x)
                x += 1

        grille.append(g)
        nrows, ncols = count_things(fin.readline())
    fin.close()

    for i, g in enumerate(grille):
        print('Field #%i:' % (i+1))
        g.print()
        print('')


if __name__ == '__main__':
    if len(sys.argv) < 2:
        print('usage: <input>')
    else:
        main(sys.argv[1])