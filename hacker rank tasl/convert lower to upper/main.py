

def reverse_words_order_and_swap_cases(sentence):
    
    sentence = ' '.join(sentence.split()[::-1])

    print(sentence)



    sentence = sentence.swapcase()
    print(sentence)



reverse_words_order_and_swap_cases('hEllo world')



